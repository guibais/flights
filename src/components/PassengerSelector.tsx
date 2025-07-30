import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Minus, Plus, Users } from 'lucide-react'
import type { CabinClass, PassengerCounts } from '../types/flight.types'

type PassengerSelectorProps = {
  passengers: PassengerCounts
  onPassengersChange: (passengers: PassengerCounts) => void
  cabinClass: CabinClass
  onCabinClassChange: (cabinClass: CabinClass) => void
}

const cabinClassOptions = [
  { value: 'economy' as const, label: 'Economy' },
  { value: 'premium_economy' as const, label: 'Premium Economy' },
  { value: 'business' as const, label: 'Business' },
  { value: 'first' as const, label: 'First' },
]

export function PassengerSelector({
  passengers,
  onPassengersChange,
  cabinClass,
  onCabinClassChange,
}: PassengerSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const updatePassengerCount = (type: keyof PassengerCounts, delta: number) => {
    const newCount = Math.max(0, passengers[type] + delta)

    if (type === 'adults' && newCount === 0) {
      return
    }

    onPassengersChange({
      ...passengers,
      [type]: newCount,
    })
  }

  const getDisplayText = () => {
    const parts = []
    if (passengers.adults > 0) {
      parts.push(
        `${passengers.adults} adult${passengers.adults > 1 ? 's' : ''}`,
      )
    }
    if (passengers.children > 0) {
      parts.push(
        `${passengers.children} child${passengers.children > 1 ? 'ren' : ''}`,
      )
    }
    if (passengers.infants > 0) {
      parts.push(
        `${passengers.infants} infant${passengers.infants > 1 ? 's' : ''}`,
      )
    }

    const passengersText = parts.join(', ')
    const classText =
      cabinClassOptions.find((c) => c.value === cabinClass)?.label || 'Economy'

    return `${passengersText}, ${classText}`
  }

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 pl-10 bg-gray-700 border border-gray-600 rounded-lg text-white text-left focus:border-blue-500 focus:outline-none flex items-center justify-between"
      >
        <span className="truncate">{getDisplayText()}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute z-50 w-full mt-1 bg-gray-700 border border-gray-600 rounded-lg shadow-lg p-4 min-w-80 right-0 sm:right-auto"
        >
          <div className="space-y-4 mb-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-white">Adults</div>
                <div className="text-sm text-gray-400">Age 18+</div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => updatePassengerCount('adults', -1)}
                  disabled={passengers.adults <= 1}
                  className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center font-medium">
                  {passengers.adults}
                </span>
                <button
                  onClick={() => updatePassengerCount('adults', 1)}
                  className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center hover:bg-gray-600"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-white">Children</div>
                <div className="text-sm text-gray-400">Age 2-17</div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => updatePassengerCount('children', -1)}
                  disabled={passengers.children <= 0}
                  className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center font-medium">
                  {passengers.children}
                </span>
                <button
                  onClick={() => updatePassengerCount('children', 1)}
                  className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center hover:bg-gray-600"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-white">Infants</div>
                <div className="text-sm text-gray-400">Under 2</div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => updatePassengerCount('infants', -1)}
                  disabled={passengers.infants <= 0}
                  className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center font-medium">
                  {passengers.infants}
                </span>
                <button
                  onClick={() => updatePassengerCount('infants', 1)}
                  className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center hover:bg-gray-600"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 pt-4">
            <div className="font-medium text-white mb-3">Cabin class</div>
            <div className="space-y-2">
              {cabinClassOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => onCabinClassChange(option.value)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    cabinClass === option.value
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-600 pt-4 mt-4">
            <button
              onClick={() => setIsOpen(false)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
