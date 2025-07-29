import { Filter, ArrowRight } from 'lucide-react'
import type { Airport } from '../types/flight.types'

type ResultsHeaderProps = {
  totalResults: number
  origin: Airport | null
  destination: Airport | null
  onToggleFilters: () => void
  showFilters: boolean
}

export function ResultsHeader({
  totalResults,
  origin,
  destination,
  onToggleFilters,
  showFilters,
}: ResultsHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-bold text-white">
          {totalResults.toLocaleString()} flights found
        </h2>
        
        {origin && destination && (
          <div className="flex items-center gap-2 text-gray-400">
            <span>{origin.presentation.title}</span>
            <ArrowRight className="w-4 h-4" />
            <span>{destination.presentation.title}</span>
          </div>
        )}
      </div>

      <button
        onClick={onToggleFilters}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
          showFilters
            ? 'bg-blue-600 border-blue-600 text-white'
            : 'bg-gray-800 border-gray-600 text-gray-300 hover:border-gray-500'
        }`}
      >
        <Filter className="w-4 h-4" />
        Filters
      </button>
    </div>
  )
}
