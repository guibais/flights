import { useState } from 'react'
import { FlightCard } from './FlightCard'
import { ResultsHeader } from './ResultsHeader'
import { SortOptions } from './SortOptions'
import { LoadingSpinner } from './LoadingSpinner'
import type { Airport, FlightSearchResponse, SortOption, PassengerCounts } from '../types/flight.types'

type FlightResultsProps = {
  results: FlightSearchResponse
  isLoading: boolean
  origin: Airport | null
  destination: Airport | null
  passengers?: PassengerCounts
}

export function FlightResults({ results, isLoading, origin, destination, passengers = { adults: 1, children: 0, infants: 0 } }: FlightResultsProps) {
  const [sortBy, setSortBy] = useState<SortOption>('best')
  const [showFilters, setShowFilters] = useState(false)

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="text-center py-12">
          <LoadingSpinner size="lg" text="Searching for the best flights..." />
        </div>
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="bg-gray-800 rounded-lg p-6 animate-pulse">
              <div className="flex justify-between items-start">
                <div className="space-y-3 flex-1">
                  <div className="h-4 bg-gray-700 rounded w-1/4"></div>
                  <div className="h-6 bg-gray-700 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-700 rounded w-1/3"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-6 bg-gray-700 rounded w-20"></div>
                  <div className="h-4 bg-gray-700 rounded w-16"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (!results.data || !results.data.itineraries || results.data.itineraries.length === 0) {
    return (
      <div className="bg-gray-800 rounded-lg p-8 text-center">
        <div className="text-gray-400 mb-4">
          <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 6.306A7.962 7.962 0 0112 5c-2.34 0-4.29 1.009-5.824 2.562" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">No flights found</h3>
        <p className="text-gray-400">
          Try adjusting your search criteria or dates to find available flights.
        </p>
      </div>
    )
  }

  const itineraries = results.data?.itineraries || []
  const sortedItineraries = itineraries.length > 0 ? [...itineraries].sort((a, b) => {
    switch (sortBy) {
      case 'cheapest':
        return a.price.raw - b.price.raw
      case 'fastest':
        return (a.legs[0]?.durationInMinutes || 0) - (b.legs[0]?.durationInMinutes || 0)
      case 'best':
      default:
        return b.score - a.score
    }
  }) : []

  return (
    <div className="space-y-6">
      <ResultsHeader
        totalResults={results.data?.context?.totalResults || 0}
        origin={origin}
        destination={destination}
        onToggleFilters={() => setShowFilters(!showFilters)}
        showFilters={showFilters}
      />

      <SortOptions
        sortBy={sortBy}
        onSortChange={setSortBy}
        resultsCount={sortedItineraries.length}
      />

      <div className="space-y-4">
        {sortedItineraries.map((itinerary, index) => (
          <FlightCard
            key={`${itinerary.id}-${index}`}
            itinerary={itinerary}
            origin={origin}
            destination={destination}
            passengers={passengers}
            sessionId={results.data?.context?.sessionId}
          />
        ))}
      </div>

      {results.data?.context?.totalResults && sortedItineraries.length < results.data.context.totalResults && (
        <div className="text-center py-8">
          <p className="text-gray-400 mb-4">
            Showing {sortedItineraries.length} of {results.data?.context?.totalResults || 0} flights
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
            Load more flights
          </button>
        </div>
      )}
    </div>
  )
}
