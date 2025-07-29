import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { ArrowRightLeft, SearchIcon } from 'lucide-react'
import { flightService } from '../services/flight.service'
import { AirportSelector } from './AirportSelector.tsx'
import { DateSelector } from './DateSelector.tsx'
import { PassengerSelector } from './PassengerSelector.tsx'
import { FlightResults } from './FlightResults.tsx'
import type {
  Airport,
  CabinClass,
  FlightSearchParams,
  PassengerCounts,
  TripType,
} from '../types/flight.types'

export function FlightSearch() {
  const [tripType, setTripType] = useState<TripType>('round-trip')
  const [origin, setOrigin] = useState<Airport | null>(null)
  const [destination, setDestination] = useState<Airport | null>(null)
  // Função para formatar data no formato YYYY-MM-DD
  const formatDate = (date: Date): string => {
    return date.toISOString().split('T')[0]
  }

  // Pré-selecionar datas: hoje para partida e 10 dias depois para retorno
  const today = new Date()
  const returnDateDefault = new Date(today)
  returnDateDefault.setDate(today.getDate() + 10)

  const [departureDate, setDepartureDate] = useState<string>(formatDate(today))
  const [returnDate, setReturnDate] = useState<string>(
    formatDate(returnDateDefault),
  )
  const [passengers, setPassengers] = useState<PassengerCounts>({
    adults: 1,
    children: 0,
    infants: 0,
  })
  const [cabinClass, setCabinClass] = useState<CabinClass>('economy')
  const [searchParams, setSearchParams] = useState<FlightSearchParams | null>(
    null,
  )

  const {
    data: flightResults,
    isLoading: isSearching,
    error,
  } = useQuery({
    queryKey: ['flights', searchParams],
    queryFn: async () => {
      if (!searchParams) return null
      console.log('Searching flights with params:', searchParams)
      const result = await flightService.searchFlights(searchParams)
      console.log('Flight search result:', result)
      return result
    },
    enabled: !!searchParams,
    retry: 1,
  })

  const handleSearch = () => {
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
    }

    setSearchParams(params)
  }

  const swapAirports = () => {
    const temp = origin
    setOrigin(destination)
    setDestination(temp)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Trip Type Selector */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2 sm:gap-4">
          {(['round-trip', 'one-way', 'multi-city'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setTripType(type)}
              className={`px-3 py-2 sm:px-4 rounded-lg font-medium transition-colors text-sm sm:text-base ${
                tripType === type
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {type === 'round-trip'
                ? 'Round trip'
                : type === 'one-way'
                  ? 'One way'
                  : 'Multi-city'}
            </button>
          ))}
        </div>
      </div>

      {/* Search Form */}
      <div className="bg-gray-800 rounded-lg p-4 sm:p-6 mb-8 space-y-4">
        {/* From/To Row */}
        <div className="grid grid-cols-2 gap-4 items-end">
          {/* Origin */}
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

          {/* Destination */}
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

        {/* Swap Button Row */}
        <div className="flex justify-center">
          <button
            onClick={swapAirports}
            className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
            aria-label="Swap airports"
          >
            <ArrowRightLeft className="w-5 h-5" />
          </button>
        </div>

        {/* Dates and Travelers Row */}
        <div className={`grid gap-4 items-end ${tripType === 'round-trip' ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2'}`}>
          {/* Departure Date */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Departure
            </label>
            <DateSelector value={departureDate} onChange={setDepartureDate} />
          </div>

          {/* Return Date */}
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

          {/* Travelers */}
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

        {/* Search Button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleSearch}
            disabled={!origin || !destination || !departureDate || isSearching}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-6 py-3 sm:px-8 rounded-lg font-medium flex items-center gap-2 transition-colors w-full sm:w-auto"
          >
            <SearchIcon className="w-5 h-5" />
            {isSearching ? 'Searching...' : 'Search flights'}
          </button>
        </div>
      </div>

      {/* Results */}
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
    </div>
  )
}
