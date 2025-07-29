import { useEffect, useRef, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { MapPin, Plane } from 'lucide-react'
import { flightService } from '../services/flight.service'
import { useDebounce } from '../hooks/useDebounce'
import type { Airport } from '../types/flight.types'

type AirportSelectorProps = {
  value: Airport | null
  onChange: (airport: Airport | null) => void
  placeholder: string
}

export function AirportSelector({
  value,
  onChange,
  placeholder,
}: AirportSelectorProps) {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const debouncedQuery = useDebounce(query, 300) // 300ms delay

  const { data: airports = [], isLoading } = useQuery({
    queryKey: ['airports', debouncedQuery],
    queryFn: () => flightService.searchAirports(debouncedQuery),
    enabled: debouncedQuery.length >= 2,
    staleTime: 5 * 60 * 1000, // 5 minutes
  })

  useEffect(() => {
    if (value) {
      setInputValue(value.presentation.suggestionTitle)
    }
  }, [value])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setInputValue(newValue)
    setQuery(newValue)
    setIsOpen(true)

    if (!newValue) {
      onChange(null)
    }
  }

  const handleAirportSelect = (airport: Airport) => {
    onChange(airport)
    setInputValue(airport.presentation.suggestionTitle)
    setIsOpen(false)
    setQuery('')
  }

  const handleFocus = () => {
    setIsOpen(true)
    if (inputValue && !value) {
      setQuery(inputValue)
    }
  }

  return (
    <div className="relative">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleFocus}
          placeholder={placeholder}
          className="w-full px-4 py-3 pl-10 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
        />
        <Plane className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
      </div>

      {isOpen && (debouncedQuery.length >= 2 || airports.length > 0) && (
        <div
          ref={dropdownRef}
          className="absolute z-50 w-full mt-1 bg-gray-700 border border-gray-600 rounded-lg shadow-lg max-h-60 overflow-y-auto"
        >
          {isLoading && (
            <div className="px-4 py-3 text-gray-400">Searching airports...</div>
          )}

          {!isLoading &&
            airports.length === 0 &&
            debouncedQuery.length >= 2 && (
              <div className="px-4 py-3 text-gray-400">No airports found</div>
            )}

          {airports.map((airport) => (
            <button
              key={`${airport.skyId}-${airport.entityId}`}
              onClick={() => handleAirportSelect(airport)}
              className="w-full px-4 py-3 text-left hover:bg-gray-600 focus:bg-gray-600 focus:outline-none transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  {airport.navigation.entityType === 'AIRPORT' ? (
                    <Plane className="w-5 h-5 text-blue-400" />
                  ) : (
                    <MapPin className="w-5 h-5 text-green-400" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-white truncate">
                    {airport.presentation.title}
                  </div>
                  <div className="text-sm text-gray-400 truncate">
                    {airport.presentation.subtitle}
                  </div>
                </div>
                <div className="flex-shrink-0 text-sm text-gray-400 font-mono">
                  {airport.skyId}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
