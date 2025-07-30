import { Plus, X } from 'lucide-react'
import { AirportSelector } from './AirportSelector'
import { DateSelector } from './DateSelector'
import type { Airport, MultiCitySegment } from '../types/flight.types'

type MultiCitySegmentsProps = {
  segments: Array<MultiCitySegment>
  onSegmentsChange: (segments: Array<MultiCitySegment>) => void
}

export function MultiCitySegments({
  segments,
  onSegmentsChange,
}: MultiCitySegmentsProps) {
  const addSegment = () => {
    const newSegment: MultiCitySegment = {
      id: `segment-${Date.now()}`,
      origin: null,
      destination: null,
      date: new Date().toISOString().split('T')[0],
    }
    onSegmentsChange([...segments, newSegment])
  }

  const removeSegment = (segmentId: string) => {
    if (segments.length > 2) {
      onSegmentsChange(segments.filter((segment) => segment.id !== segmentId))
    }
  }

  const updateSegment = (
    segmentId: string,
    field: keyof MultiCitySegment,
    value: Airport | null | string,
  ) => {
    onSegmentsChange(
      segments.map((segment) =>
        segment.id === segmentId ? { ...segment, [field]: value } : segment,
      ),
    )
  }

  return (
    <div className="space-y-4">
      {segments.map((segment, index) => (
        <div key={segment.id} className="bg-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-300">
              Flight {index + 1}
            </h3>
            {segments.length > 2 && (
              <button
                onClick={() => removeSegment(segment.id)}
                className="p-1 text-gray-400 hover:text-red-400 transition-colors"
                aria-label="Remove flight"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                From
              </label>
              <AirportSelector
                value={segment.origin}
                onChange={(airport) =>
                  updateSegment(segment.id, 'origin', airport)
                }
                placeholder="Where from?"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                To
              </label>
              <AirportSelector
                value={segment.destination}
                onChange={(airport) =>
                  updateSegment(segment.id, 'destination', airport)
                }
                placeholder="Where to?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Departure
              </label>
              <DateSelector
                value={segment.date}
                onChange={(date) => updateSegment(segment.id, 'date', date)}
              />
            </div>
          </div>
        </div>
      ))}

      {segments.length < 6 && (
        <button
          onClick={addSegment}
          className="w-full py-3 border-2 border-dashed border-gray-600 rounded-lg text-gray-400 hover:border-gray-500 hover:text-gray-300 transition-colors flex items-center justify-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add another flight
        </button>
      )}
    </div>
  )
}
