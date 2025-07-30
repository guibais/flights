import type { SortOption } from '../types/flight.types'

type SortOptionsProps = {
  sortBy: SortOption
  onSortChange: (sortBy: SortOption) => void
  resultsCount: number
}

const sortOptions = [
  { value: 'best' as const, label: 'Best', description: 'Best overall value' },
  {
    value: 'cheapest' as const,
    label: 'Cheapest',
    description: 'Lowest price',
  },
  {
    value: 'fastest' as const,
    label: 'Fastest',
    description: 'Shortest duration',
  },
]

export function SortOptions({
  sortBy,
  onSortChange,
  resultsCount,
}: SortOptionsProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-4 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <span className="text-gray-400 text-sm">Sort by:</span>
          <div className="flex gap-2 ml-3">
            {sortOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => onSortChange(option.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  sortBy === option.value
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
                title={option.description}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="text-sm text-gray-400">{resultsCount} results</div>
      </div>
    </div>
  )
}
