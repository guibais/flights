import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Clock, MapPin, Plane, Star, X } from 'lucide-react'
import { flightService } from '../services/flight.service'
import { useCaptcha } from '../hooks/useCaptcha'
import { CaptchaModal } from './CaptchaModal'
import type {
  CaptchaError,
  FlightDetailsParams,
  FlightItinerary,
  PassengerCounts,
} from '../types/flight.types'

type FlightDetailsModalProps = {
  isOpen: boolean
  onClose: () => void
  flight: FlightItinerary
  sessionId: string
  passengers: PassengerCounts
}

export function FlightDetailsModal({
  isOpen,
  onClose,
  flight,
  sessionId,
  passengers,
}: FlightDetailsModalProps) {
  const {
    isOpen: isCaptchaOpen,
    captchaData,
    showCaptcha,
    closeCaptcha,
    handleCaptchaSolved,
  } = useCaptcha()

  const [detailsParams, setDetailsParams] =
    useState<FlightDetailsParams | null>(null)

  useEffect(() => {
    const legs = flight.legs.map((leg) => ({
      origin: leg.origin.displayCode,
      destination: leg.destination.displayCode,
      date: leg.departure.split('T')[0],
    }))

    const params: FlightDetailsParams = {
      legs,
      sessionId,
      adults: passengers.adults,
      children: passengers.children,
      infants: passengers.infants,
      currency: 'USD',
      locale: 'en-US',
      market: 'en-US',
      countryCode: 'US',
    }

    setDetailsParams(params)
  }, [flight, sessionId, passengers])

  const {
    data: flightDetails,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['flightDetails', detailsParams],
    queryFn: async () => {
      if (!detailsParams) return null
      try {
        const result = await flightService.getFlightDetails(detailsParams)
        return result
      } catch (apiError) {
        const captchaError = apiError as CaptchaError
        if (captchaError.captchaData) {
          showCaptcha(captchaError.captchaData, () => refetch())
          return null
        }
        throw apiError
      }
    },
    enabled: !!detailsParams && isOpen,
    retry: (failureCount, retryError) => {
      const captchaError = retryError as CaptchaError
      if (captchaError.captchaData) {
        return false
      }
      return failureCount < 1
    },
  })

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return `${hours}h ${mins}m`
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    })
  }

  if (!isOpen) return null

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-white">Flight Details</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          <div className="p-6">
            {isLoading && (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                <span className="ml-3 text-gray-300">
                  Loading flight details...
                </span>
              </div>
            )}

            {error && (
              <div className="bg-red-900/50 border border-red-700 rounded-lg p-4 mb-6">
                <p className="text-red-300 font-medium mb-2">
                  Error loading flight details
                </p>
                <p className="text-red-200 text-sm">
                  {error instanceof Error
                    ? error.message
                    : 'An unexpected error occurred'}
                </p>
                <button
                  onClick={() => refetch()}
                  className="mt-3 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm transition-colors"
                >
                  Try Again
                </button>
              </div>
            )}

            {flightDetails?.data && (
              <div className="space-y-6">
                {flightDetails.data.itinerary.legs.map((leg) => (
                  <div key={leg.id} className="bg-gray-700 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-medium text-white">
                        {leg.origin.city} → {leg.destination.city}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-300">
                        <Clock className="w-4 h-4" />
                        <span>{formatDuration(leg.duration)}</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {leg.segments.map((segment) => (
                        <div
                          key={segment.id}
                          className="border-l-2 border-blue-500 pl-4"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <img
                                src={segment.marketingCarrier.logo}
                                alt={segment.marketingCarrier.name}
                                className="w-8 h-8 rounded"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement
                                  target.style.display = 'none'
                                }}
                              />
                              <div>
                                <p className="text-white font-medium">
                                  {segment.marketingCarrier.name}
                                </p>
                                <p className="text-gray-400 text-sm">
                                  Flight {segment.flightNumber}
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-white">
                                {formatDuration(segment.duration)}
                              </p>
                              {segment.dayChange > 0 && (
                                <p className="text-orange-400 text-sm">
                                  +{segment.dayChange} day
                                  {segment.dayChange > 1 ? 's' : ''}
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <Plane className="w-4 h-4 text-gray-400 rotate-45" />
                                <span className="text-gray-300 text-sm">
                                  Departure
                                </span>
                              </div>
                              <p className="text-white font-medium">
                                {formatTime(segment.departure)}
                              </p>
                              <p className="text-gray-400 text-sm">
                                {formatDate(segment.departure)}
                              </p>
                              <p className="text-gray-400 text-sm">
                                {segment.origin.name} (
                                {segment.origin.displayCode})
                              </p>
                            </div>

                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <MapPin className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-300 text-sm">
                                  Arrival
                                </span>
                              </div>
                              <p className="text-white font-medium">
                                {formatTime(segment.arrival)}
                              </p>
                              <p className="text-gray-400 text-sm">
                                {formatDate(segment.arrival)}
                              </p>
                              <p className="text-gray-400 text-sm">
                                {segment.destination.name} (
                                {segment.destination.displayCode})
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {leg.stopCount > 0 && (
                      <div className="mt-4 p-3 bg-yellow-900/30 border border-yellow-700 rounded-lg">
                        <p className="text-yellow-300 text-sm">
                          {leg.stopCount} stop{leg.stopCount > 1 ? 's' : ''}
                        </p>
                      </div>
                    )}
                  </div>
                ))}

                <div className="bg-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-white mb-4">
                    Booking Options
                  </h3>
                  <div className="space-y-3">
                    {flightDetails.data.itinerary.pricingOptions
                      .slice(0, 5)
                      .map((option, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 bg-gray-600 rounded-lg hover:bg-gray-500 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div>
                              <p className="text-white font-medium">
                                {option.agents[0].name}
                              </p>
                              <div className="flex items-center gap-2">
                                <Star className="w-4 h-4 text-yellow-400" />
                                <span className="text-gray-300 text-sm">
                                  {option.agents[0].rating.value.toFixed(1)} (
                                  {option.agents[0].rating.count.toLocaleString()}
                                  )
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-white font-bold text-lg">
                              ${option.totalPrice}
                            </p>
                            <a
                              href={option.agents[0].url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block mt-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors"
                            >
                              Book Now
                            </a>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {flightDetails.data.itinerary
                  .operatingCarrierSafetyAttributes &&
                  flightDetails.data.itinerary.operatingCarrierSafetyAttributes
                    .length > 0 && (
                    <div className="bg-gray-700 rounded-lg p-6">
                      <h3 className="text-lg font-medium text-white mb-4">
                        Safety Information
                      </h3>
                      {flightDetails.data.itinerary.operatingCarrierSafetyAttributes.map(
                        (safety, index) => (
                          <div key={index} className="mb-4 last:mb-0">
                            <p className="text-white font-medium mb-2">
                              {safety.carrierName}
                            </p>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              {safety.faceMasksCompulsory !== null && (
                                <div className="flex justify-between">
                                  <span className="text-gray-300">
                                    Face masks:
                                  </span>
                                  <span className="text-white">
                                    {safety.faceMasksCompulsory
                                      ? 'Required'
                                      : 'Optional'}
                                  </span>
                                </div>
                              )}
                              {safety.aircraftDeepCleanedDaily !== null && (
                                <div className="flex justify-between">
                                  <span className="text-gray-300">
                                    Daily cleaning:
                                  </span>
                                  <span className="text-white">
                                    {safety.aircraftDeepCleanedDaily
                                      ? 'Yes'
                                      : 'No'}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  )}
              </div>
            )}
          </div>
        </div>
      </div>

      {isCaptchaOpen && captchaData && (
        <CaptchaModal
          isOpen={isCaptchaOpen}
          onClose={closeCaptcha}
          onSolved={handleCaptchaSolved}
          captchaData={captchaData}
        />
      )}
    </>
  )
}
