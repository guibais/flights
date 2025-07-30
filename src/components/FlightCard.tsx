import { useState } from 'react'
import { ChevronDown, ChevronUp, Info, Plane } from 'lucide-react'
import { FlightBookingModal } from './FlightBookingModal'
import { FlightDetailsModal } from './FlightDetailsModal'
import type {
  Airport,
  FlightItinerary,
  PassengerCounts,
} from '../types/flight.types'

type FlightCardProps = {
  itinerary: FlightItinerary
  origin: Airport | null
  destination: Airport | null
  passengers?: PassengerCounts
  sessionId?: string
}

export function FlightCard({
  itinerary,
  origin,
  destination,
  passengers = { adults: 1, children: 0, infants: 0 },
  sessionId,
}: FlightCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false)

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })
  }

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return `${hours}h ${mins}m`
  }

  const getStopsText = (stopCount: number) => {
    if (stopCount === 0) return 'Nonstop'
    if (stopCount === 1) return '1 stop'
    return `${stopCount} stops`
  }

  const mainLeg = itinerary.legs[0]
  const returnLeg = itinerary.legs[1]

  const renderLegSummary = (leg: typeof mainLeg) => (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0">
          {leg.carriers.marketing[0]?.logoUrl ? (
            <img
              src={leg.carriers.marketing[0].logoUrl}
              alt={leg.carriers.marketing[0].name}
              className="w-8 h-8 rounded"
            />
          ) : (
            <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center">
              <Plane className="w-4 h-4" />
            </div>
          )}
        </div>

        <div className="flex items-center gap-6">
          <div className="text-center">
            <div className="text-lg font-semibold">
              {formatTime(leg.departure)}
            </div>
            <div className="text-sm text-gray-400">
              {leg.origin.displayCode}
            </div>
          </div>

          <div className="flex flex-col items-center text-gray-400">
            <div className="text-xs mb-1">
              {formatDuration(leg.durationInMinutes)}
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
              <div className="w-16 h-px bg-gray-400"></div>
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            </div>
            <div className="text-xs mt-1">{getStopsText(leg.stopCount)}</div>
          </div>

          <div className="text-center">
            <div className="text-lg font-semibold">
              {formatTime(leg.arrival)}
            </div>
            <div className="text-sm text-gray-400">
              {leg.destination.displayCode}
            </div>
          </div>
        </div>
      </div>

      <div className="text-right text-sm text-gray-400">
        <div>{leg.carriers.marketing[0]?.name}</div>
        {leg.timeDeltaInDays > 0 && (
          <div className="text-xs text-orange-400">
            +{leg.timeDeltaInDays} day
          </div>
        )}
      </div>
    </div>
  )

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div className="flex-1 space-y-4">
            {renderLegSummary(mainLeg)}

            {returnLeg && (
              <div className="border-t border-gray-700 pt-4">
                {renderLegSummary(returnLeg)}
              </div>
            )}
          </div>

          <div className="ml-6 text-right">
            <div className="text-2xl font-bold text-green-400 mb-1">
              {itinerary.price.formatted}
            </div>
            <div className="text-sm text-gray-400 mb-3">per person</div>
            <div className="flex gap-2">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-1 px-3 py-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                {isExpanded ? (
                  <>
                    <ChevronUp className="w-4 h-4" />
                    Hide details
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4" />
                    Show details
                  </>
                )}
              </button>
              {sessionId && (
                <button
                  onClick={() => setIsDetailsModalOpen(true)}
                  className="flex items-center gap-1 px-3 py-2 text-sm text-gray-300 hover:text-white border border-gray-600 hover:border-gray-500 rounded-lg transition-colors"
                >
                  <Info className="w-4 h-4" />
                  View Details
                </button>
              )}
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Select
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-700">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium"
          >
            Flight details
            {isExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
        </div>

        {isExpanded && (
          <div className="mt-4 space-y-6">
            {itinerary.legs.map((leg, legIndex) => (
              <div key={leg.id} className="bg-gray-900 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-4">
                  <Plane className="w-4 h-4 text-blue-400" />
                  <span className="font-medium">
                    {legIndex === 0 ? 'Outbound' : 'Return'} •{' '}
                    {formatDuration(leg.durationInMinutes)}
                  </span>
                </div>

                <div className="space-y-4">
                  {leg.segments.map((segment, segmentIndex) => (
                    <div key={segment.id} className="flex items-start gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                        {segmentIndex < leg.segments.length - 1 && (
                          <div className="w-px h-16 bg-gray-600 my-2"></div>
                        )}
                      </div>

                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <div className="font-medium">
                              {formatTime(segment.departure)} -{' '}
                              {formatTime(segment.arrival)}
                            </div>
                            <div className="text-sm text-gray-400">
                              {segment.origin.name} (
                              {segment.origin.displayCode}) →{' '}
                              {segment.destination.name} (
                              {segment.destination.displayCode})
                            </div>
                          </div>
                          <div className="text-right text-sm">
                            <div className="text-gray-400">
                              {formatDuration(segment.durationInMinutes)}
                            </div>
                            <div className="text-gray-500">
                              {segment.flightNumber}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-2">
                            {segment.marketingCarrier.logoUrl ? (
                              <img
                                src={segment.marketingCarrier.logoUrl}
                                alt={segment.marketingCarrier.name}
                                className="w-5 h-5 rounded"
                              />
                            ) : (
                              <Plane className="w-4 h-4" />
                            )}
                            <span>{segment.marketingCarrier.name}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="bg-gray-900 rounded-lg p-4">
              <h4 className="font-medium mb-3">Fare information</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-400">Changes:</span>
                  <span className="ml-2">
                    {itinerary.farePolicy.isChangeAllowed
                      ? 'Allowed'
                      : 'Not allowed'}
                  </span>
                </div>
                <div>
                  <span className="text-gray-400">Cancellation:</span>
                  <span className="ml-2">
                    {itinerary.farePolicy.isCancellationAllowed
                      ? 'Allowed'
                      : 'Not allowed'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <FlightBookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        itinerary={itinerary}
        origin={origin}
        destination={destination}
        passengers={passengers}
      />

      {sessionId && (
        <FlightDetailsModal
          isOpen={isDetailsModalOpen}
          onClose={() => setIsDetailsModalOpen(false)}
          flight={itinerary}
          sessionId={sessionId}
          passengers={passengers}
        />
      )}
    </div>
  )
}
