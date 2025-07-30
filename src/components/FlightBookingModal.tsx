import { useState } from 'react'
import { Check, CreditCard, Plane, Users, X } from 'lucide-react'
import type { Airport, FlightItinerary } from '../types/flight.types'

type FlightBookingModalProps = {
  isOpen: boolean
  onClose: () => void
  itinerary: FlightItinerary
  origin: Airport | null
  destination: Airport | null
  passengers: { adults: number; children: number; infants: number }
}

export function FlightBookingModal({
  isOpen,
  onClose,
  itinerary,
  passengers,
}: FlightBookingModalProps) {
  const [step, setStep] = useState<'review' | 'booking' | 'success'>('review')

  if (!isOpen) return null

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    })
  }

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return `${hours}h ${mins}m`
  }

  const totalPassengers =
    passengers.adults + passengers.children + passengers.infants
  const totalPrice =
    parseFloat(itinerary.price.formatted.replace(/[^0-9.]/g, '')) *
    totalPassengers

  const handleBookFlight = async () => {
    setStep('booking')

    await new Promise((resolve) => setTimeout(resolve, 2000))

    setStep('success')
  }

  const handleClose = () => {
    setStep('review')
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className="text-xl font-semibold text-white">
            {step === 'review' && 'Review Your Flight'}
            {step === 'booking' && 'Booking Your Flight'}
            {step === 'success' && 'Booking Confirmed!'}
          </h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {step === 'review' && (
            <div className="space-y-6">
              <div className="bg-gray-900 rounded-lg p-4">
                <h3 className="font-medium text-white mb-4 flex items-center gap-2">
                  <Plane className="w-4 h-4" />
                  Flight Details
                </h3>

                {itinerary.legs.map((leg, index) => (
                  <div
                    key={leg.id}
                    className={
                      index > 0 ? 'mt-4 pt-4 border-t border-gray-700' : ''
                    }
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-lg font-semibold text-white">
                          {formatTime(leg.departure)} -{' '}
                          {formatTime(leg.arrival)}
                        </div>
                        <div className="text-sm text-gray-400">
                          {leg.origin.displayCode} →{' '}
                          {leg.destination.displayCode}
                        </div>
                        <div className="text-sm text-gray-400">
                          {formatDate(leg.departure)} •{' '}
                          {formatDuration(leg.durationInMinutes)}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">
                          {leg.carriers.marketing[0]?.name}
                        </div>
                        <div className="text-sm text-gray-400">
                          {leg.stopCount === 0
                            ? 'Nonstop'
                            : `${leg.stopCount} stops`}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-900 rounded-lg p-4">
                <h3 className="font-medium text-white mb-3 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Passengers
                </h3>
                <div className="space-y-2 text-sm">
                  {passengers.adults > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-400">Adults</span>
                      <span className="text-white">{passengers.adults}</span>
                    </div>
                  )}
                  {passengers.children > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-400">Children</span>
                      <span className="text-white">{passengers.children}</span>
                    </div>
                  )}
                  {passengers.infants > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-400">Infants</span>
                      <span className="text-white">{passengers.infants}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-4">
                <h3 className="font-medium text-white mb-3 flex items-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  Price Breakdown
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">
                      Base fare ({totalPassengers} passengers)
                    </span>
                    <span className="text-white">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Taxes & fees</span>
                    <span className="text-white">Included</span>
                  </div>
                  <div className="border-t border-gray-700 pt-2 mt-2">
                    <div className="flex justify-between font-semibold">
                      <span className="text-white">Total</span>
                      <span className="text-green-400 text-lg">
                        ${totalPrice.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleClose}
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleBookFlight}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Book Flight
                </button>
              </div>
            </div>
          )}

          {step === 'booking' && (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
              <h3 className="text-lg font-medium text-white mb-2">
                Processing Your Booking
              </h3>
              <p className="text-gray-400">
                Please wait while we confirm your flight...
              </p>
            </div>
          )}

          {step === 'success' && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">
                Booking Confirmed!
              </h3>
              <p className="text-gray-400 mb-6">
                Your flight has been successfully booked. You will receive a
                confirmation email shortly.
              </p>
              <div className="bg-gray-900 rounded-lg p-4 mb-6">
                <div className="text-sm text-gray-400 mb-1">
                  Booking Reference
                </div>
                <div className="text-lg font-mono text-white">
                  SKY{Math.random().toString(36).substr(2, 6).toUpperCase()}
                </div>
              </div>
              <button
                onClick={handleClose}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
