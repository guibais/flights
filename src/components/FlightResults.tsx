import { useCallback, useMemo, useRef, useState } from 'react'
import { VariableSizeList as List } from 'react-window'
import { FlightBookingModal } from './FlightBookingModal'
import { FlightCard } from './FlightCard'
import { LoadingSpinner } from './LoadingSpinner'
import { ResultsHeader } from './ResultsHeader'
import { SortOptions } from './SortOptions'
import type {
  Airport,
  FlightItinerary,
  FlightSearchResponse,
  PassengerCounts,
  SortOption,
} from '../types/flight.types'

type VirtualizedRowProps = {
  index: number
  style: React.CSSProperties
  data: {
    itineraries: Array<FlightItinerary>
    origin: Airport | null
    destination: Airport | null
    passengers: PassengerCounts
    onBookingModalOpen: (itinerary: FlightItinerary) => void
    onItemExpansion: (itineraryId: string, isExpanded: boolean) => void
    expandedItems: Set<string>
  }
}

const VirtualizedRow = ({ index, style, data }: VirtualizedRowProps) => {
  const {
    itineraries,
    origin,
    destination,
    passengers,
    onBookingModalOpen,
    onItemExpansion,
    expandedItems,
  } = data
  const itinerary = itineraries[index]

  return (
    <div style={style}>
      <div className="pb-4">
        <FlightCard
          key={`${itinerary.id}-${index}`}
          itinerary={itinerary}
          origin={origin}
          destination={destination}
          passengers={passengers}
          onBookingModalOpen={onBookingModalOpen}
          onExpansionChange={(isExpanded) =>
            onItemExpansion(itinerary.id, isExpanded)
          }
          isExpanded={expandedItems.has(itinerary.id)}
        />
      </div>
    </div>
  )
}

type FlightResultsProps = {
  results: FlightSearchResponse
  isLoading: boolean
  origin: Airport | null
  destination: Airport | null
  passengers?: PassengerCounts
}

export function FlightResults({
  results,
  isLoading,
  origin,
  destination,
  passengers = { adults: 1, children: 0, infants: 0 },
}: FlightResultsProps) {
  const [sortBy, setSortBy] = useState<SortOption>('best')
  const [showFilters, setShowFilters] = useState(false)
  const [selectedItinerary, setSelectedItinerary] =
    useState<FlightItinerary | null>(null)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())
  const listRef = useRef<any>(null)
  const itemHeights = useRef<Map<number, number>>(new Map())

  const handleBookingModalOpen = (itinerary: FlightItinerary) => {
    setSelectedItinerary(itinerary)
    setIsBookingModalOpen(true)
  }

  const handleBookingModalClose = () => {
    setIsBookingModalOpen(false)
    setSelectedItinerary(null)
  }

  const handleItemExpansion = useCallback(
    (itineraryId: string, isExpanded: boolean) => {
      setExpandedItems((prev) => {
        const newSet = new Set(prev)
        if (isExpanded) {
          newSet.add(itineraryId)
        } else {
          newSet.delete(itineraryId)
        }
        return newSet
      })
      if (listRef.current) {
        itemHeights.current.clear()
        listRef.current.resetAfterIndex(0)
      }
    },
    [],
  )

  const getItemSize = useCallback(
    (index: number) => {
      const cached = itemHeights.current.get(index)
      if (cached) return cached

      const baseHeight = 280

      const itineraries = results.data?.itineraries || []
      const itinerary = itineraries[index]
      const isExpanded = expandedItems.has(itinerary?.id || '')

      if (!isExpanded) {
        itemHeights.current.set(index, baseHeight)
        return baseHeight
      }

      let expandedHeight = baseHeight

      // Balanced values - not too big, not too small
      expandedHeight += itinerary.legs.length * 65 // Leg headers

      itinerary.legs.forEach((leg) => {
        expandedHeight += leg.segments.length * 120 // Segments
        if (leg.segments.length > 1) {
          expandedHeight += (leg.segments.length - 1) * 20 // Connection lines
        }
      })

      expandedHeight += 100 // Fare policy section

      expandedHeight += 40 // Reasonable buffer

      itemHeights.current.set(index, expandedHeight)
      return expandedHeight
    },
    [expandedItems, results.data?.itineraries],
  )

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

  if (
    !results.data ||
    !results.data.itineraries ||
    results.data.itineraries.length === 0
  ) {
    return (
      <div className="bg-gray-800 rounded-lg p-8 text-center">
        <div className="text-gray-400 mb-4">
          <svg
            className="w-16 h-16 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 6.306A7.962 7.962 0 0112 5c-2.34 0-4.29 1.009-5.824 2.562"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">
          No flights found
        </h3>
        <p className="text-gray-400">
          Try adjusting your search criteria or dates to find available flights.
        </p>
      </div>
    )
  }

  const itineraries = results.data?.itineraries || []
  const sortedItineraries = useMemo(
    () =>
      itineraries.length > 0
        ? [...itineraries].sort((a, b) => {
            switch (sortBy) {
              case 'cheapest':
                return a.price.raw - b.price.raw
              case 'fastest':
                return (
                  (a.legs[0]?.durationInMinutes || 0) -
                  (b.legs[0]?.durationInMinutes || 0)
                )
              case 'best':
              default:
                return b.score - a.score
            }
          })
        : [],
    [itineraries, sortBy],
  )

  const virtualizedData = useMemo(
    () => ({
      itineraries: sortedItineraries,
      origin,
      destination,
      passengers,
      onBookingModalOpen: handleBookingModalOpen,
      onItemExpansion: handleItemExpansion,
      expandedItems,
    }),
    [
      sortedItineraries,
      origin,
      destination,
      passengers,
      handleItemExpansion,
      expandedItems,
    ],
  )

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

      {sortedItineraries.length > 0 ? (
        <div className="h-[600px] w-full">
          <List
            ref={listRef}
            height={600}
            width="100%"
            itemCount={sortedItineraries.length}
            itemSize={getItemSize}
            itemData={virtualizedData}
            overscanCount={5}
          >
            {VirtualizedRow}
          </List>
        </div>
      ) : (
        <div className="text-center py-12 text-gray-400">
          <p>No flights match your current search criteria.</p>
        </div>
      )}

      {results.data?.context?.totalResults &&
        sortedItineraries.length < results.data.context.totalResults && (
          <div className="text-center py-8">
            <p className="text-gray-400 mb-4">
              Showing {sortedItineraries.length} of{' '}
              {results.data?.context?.totalResults || 0} flights
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Load more flights
            </button>
          </div>
        )}

      {selectedItinerary && (
        <FlightBookingModal
          isOpen={isBookingModalOpen}
          onClose={handleBookingModalClose}
          itinerary={selectedItinerary}
          origin={origin}
          destination={destination}
          passengers={passengers}
        />
      )}
    </div>
  )
}
