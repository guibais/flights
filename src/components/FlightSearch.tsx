import { useCallback, useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { ArrowRightLeft, SearchIcon } from 'lucide-react'
import { useCaptcha } from '../hooks/useCaptcha'
import { flightService } from '../services/flight.service'
import { AirportSelector } from './AirportSelector.tsx'
import { CaptchaModal } from './CaptchaModal.tsx'
import { DateSelector } from './DateSelector.tsx'
import { FlightResults } from './FlightResults.tsx'
import { MultiCitySegments } from './MultiCitySegments.tsx'
import { PassengerSelector } from './PassengerSelector.tsx'
import type {
  Airport,
  CabinClass,
  CaptchaError,
  FlightSearchParams,
  MultiCitySearchParams,
  MultiCitySegment,
  PassengerCounts,
  TripType,
} from '../types/flight.types'

// Type guard functions
const isMultiCitySearch = (params: FlightSearchParams | MultiCitySearchParams): params is MultiCitySearchParams => {
  return 'segments' in params
}

export function FlightSearch() {
  const formatDate = useCallback((date: Date): string => {
    return date.toISOString().split('T')[0]
  }, [])

  const today = useMemo(() => new Date(), [])
  const {
    isOpen: isCaptchaOpen,
    captchaData,
    showCaptcha,
    closeCaptcha,
    handleCaptchaSolved,
  } = useCaptcha()

  const [tripType, setTripType] = useState<TripType>('round-trip')
  const [origin, setOrigin] = useState<Airport | null>(null)
  const [destination, setDestination] = useState<Airport | null>(null)
  const initialMultiCitySegments = useMemo<Array<MultiCitySegment>>(
    () => [
      {
        id: 'segment-1',
        origin: null,
        destination: null,
        date: formatDate(today),
      },
      {
        id: 'segment-2',
        origin: null,
        destination: null,
        date: formatDate(new Date(today.getTime() + 24 * 60 * 60 * 1000)), // tomorrow
      },
    ],
    [today, formatDate],
  )

  const [multiCitySegments, setMultiCitySegments] = useState<
    Array<MultiCitySegment>
  >(initialMultiCitySegments)

  const returnDateDefault = useMemo(() => {
    const date = new Date(today)
    date.setDate(today.getDate() + 10)
    return date
  }, [today])

  const [departureDate, setDepartureDate] = useState<string>(() =>
    formatDate(today),
  )
  const [returnDate, setReturnDate] = useState<string>(() =>
    formatDate(returnDateDefault),
  )
  const [passengers, setPassengers] = useState<PassengerCounts>({
    adults: 1,
    children: 0,
    infants: 0,
  })
  const [cabinClass, setCabinClass] = useState<CabinClass>('economy')
  const [searchParams, setSearchParams] = useState<FlightSearchParams | MultiCitySearchParams | null>(
    null,
  )

  const tripTypeOptions = useMemo(
    () => ['round-trip', 'one-way', 'multi-city'] as const,
    [],
  )

  const tripTypeLabels = useMemo(
    () => ({
      'round-trip': 'Round trip',
      'one-way': 'One way',
      'multi-city': 'Multi-city',
    }),
    [],
  )

  const gridClassName = useMemo(
    () =>
      `grid gap-4 items-end ${tripType === 'round-trip' ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2'}`,
    [tripType],
  )

  const queryFn = useCallback(async () => {
    if (!searchParams) return null
    console.log('Searching flights with params:', searchParams)
    try {
      // Check if it's multi-city search parameters and call appropriate service
      const result = isMultiCitySearch(searchParams)
        ? await flightService.searchMultiCityFlights(searchParams)
        : await flightService.searchFlights(searchParams)
      console.log('Flight search result:', result)
      return result
    } catch (apiError) {
      const captchaError = apiError as CaptchaError
      if (captchaError.captchaData) {
        showCaptcha(captchaError.captchaData, () => refetch())
        return null
      }
      throw apiError
    }
  }, [searchParams, showCaptcha])

  const retryFn = useCallback((failureCount: number, retryError: Error) => {
    const captchaError = retryError as CaptchaError
    if (captchaError.captchaData) {
      return false
    }
    return failureCount < 1
  }, [])

  const {
    data: flightResults,
    isLoading: isSearching,
    error,
    refetch,
  } = useQuery({
    queryKey: ['flights', searchParams],
    queryFn,
    enabled: !!searchParams,
    retry: retryFn,
  })

  const handleSearch = useCallback(() => {
    if (tripType === 'multi-city') {
      const validSegments = multiCitySegments.filter(
        (segment) => segment.origin && segment.destination && segment.date,
      )
      if (validSegments.length < 2) {
        alert(
          'Please fill in at least 2 complete flight segments for multi-city search',
        )
        return
      }
      
      // Use the multi-city search parameters
      const multiCityParams = {
        segments: validSegments,
        adults: passengers.adults,
        children: passengers.children,
        infants: passengers.infants,
        cabinClass,
        sortBy: 'best' as const,
        currency: 'USD',
        market: 'en-US',
        countryCode: 'US',
      }
      setSearchParams(multiCityParams)
      return
    }

    if (!origin || !destination || !departureDate) {
      return
    }

    const params: FlightSearchParams = {
      originSkyId: origin.skyId,
      destinationSkyId: destination.skyId,
      originEntityId: origin.entityId,
      destinationEntityId: destination.entityId,
      date: departureDate,
      ...(tripType === 'round-trip' && returnDate && { returnDate }),
      adults: passengers.adults,
      children: passengers.children,
      infants: passengers.infants,
      cabinClass,
      sortBy: 'best',
      currency: 'USD',
      market: 'en-US',
      countryCode: 'US',
      locale: 'en-US',
    }

    setSearchParams(params)
  }, [
    tripType,
    multiCitySegments,
    origin,
    destination,
    departureDate,
    returnDate,
    passengers,
    cabinClass,
  ])

  const swapAirports = useCallback(() => {
    const temp = origin
    setOrigin(destination)
    setDestination(temp)
  }, [origin, destination])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <div className="flex flex-wrap gap-2 sm:gap-4">
          {tripTypeOptions.map((type) => (
            <button
              key={type}
              onClick={() => setTripType(type)}
              className={`px-3 py-2 sm:px-4 rounded-lg font-medium transition-colors text-sm sm:text-base ${
                tripType === type
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {tripTypeLabels[type]}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-4 sm:p-6 mb-8 space-y-4">
        {tripType === 'multi-city' ? (
          <div className="space-y-4">
            <MultiCitySegments
              segments={multiCitySegments}
              onSegmentsChange={setMultiCitySegments}
            />

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Travelers
              </label>
              <PassengerSelector
                passengers={passengers}
                onPassengersChange={setPassengers}
                cabinClass={cabinClass}
                onCabinClassChange={setCabinClass}
              />
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-4 items-end">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  From
                </label>
                <AirportSelector
                  value={origin}
                  onChange={setOrigin}
                  placeholder="Where from?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  To
                </label>
                <AirportSelector
                  value={destination}
                  onChange={setDestination}
                  placeholder="Where to?"
                />
              </div>
            </div>

            <div className="flex justify-center">
              <button
                onClick={swapAirports}
                className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                aria-label="Swap airports"
              >
                <ArrowRightLeft className="w-5 h-5" />
              </button>
            </div>

            <div className={gridClassName}>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Departure
                </label>
                <DateSelector
                  value={departureDate}
                  onChange={setDepartureDate}
                />
              </div>

              {tripType === 'round-trip' && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Return
                  </label>
                  <DateSelector
                    value={returnDate}
                    onChange={setReturnDate}
                    minDate={departureDate}
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Travelers
                </label>
                <PassengerSelector
                  passengers={passengers}
                  onPassengersChange={setPassengers}
                  cabinClass={cabinClass}
                  onCabinClassChange={setCabinClass}
                />
              </div>
            </div>
          </>
        )}

        <div className="mt-6 flex justify-center">
          <button
            onClick={handleSearch}
            disabled={isSearching}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-6 py-3 sm:px-8 rounded-lg font-medium flex items-center gap-2 transition-colors w-full sm:w-auto"
          >
            <SearchIcon className="w-5 h-5" />
            {isSearching ? 'Searching...' : 'Search flights'}
          </button>
        </div>
      </div>

      {tripType === 'multi-city' && searchParams && isMultiCitySearch(searchParams) && (
        <div className="bg-blue-900/50 border border-blue-700 rounded-lg p-4 mb-6">
          <p className="text-blue-300 font-medium mb-2">Multi-city Search</p>
          <p className="text-blue-200 text-sm">
            Searching across {searchParams.segments.length} flight segments using the multi-city endpoint.
            Results will include comprehensive multi-city booking options.
          </p>
        </div>
      )}

      {error && (
        <div className="bg-red-900/50 border border-red-700 rounded-lg p-4 mb-6">
          <p className="text-red-300 font-medium mb-2">
            Error searching flights
          </p>
          <p className="text-red-200 text-sm">
            {error instanceof Error
              ? error.message
              : 'An unexpected error occurred'}
          </p>
          <p className="text-red-200 text-xs mt-2">
            Please check your API key configuration or try again later
          </p>
        </div>
      )}

      {flightResults?.data && (
        <FlightResults
          results={flightResults}
          isLoading={isSearching}
          origin={origin}
          destination={destination}
          passengers={passengers}
        />
      )}

      {isCaptchaOpen && captchaData && (
        <CaptchaModal
          isOpen={isCaptchaOpen}
          onClose={closeCaptcha}
          onSolved={handleCaptchaSolved}
          captchaData={captchaData}
        />
      )}
    </div>
  )
}
