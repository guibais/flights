export type Airport = {
  skyId: string
  entityId: string
  presentation: {
    title: string
    suggestionTitle: string
    subtitle: string
  }
  navigation: {
    entityId: string
    entityType: 'AIRPORT' | 'CITY'
    localizedName: string
    relevantFlightParams: {
      skyId: string
      entityId: string
      flightPlaceType: 'AIRPORT' | 'CITY'
      localizedName: string
    }
    relevantHotelParams: {
      entityId: string
      entityType: 'CITY' | 'AIRPORT'
      localizedName: string
    }
  }
}

export type FlightSearchParams = {
  originSkyId: string
  destinationSkyId: string
  originEntityId: string
  destinationEntityId: string
  date: string
  returnDate?: string
  adults?: number
  children?: number
  infants?: number
  cabinClass?: 'economy' | 'premium_economy' | 'business' | 'first'
  sortBy?: 'best' | 'cheapest' | 'fastest'
  currency?: string
  market?: string
  countryCode?: string
}

export type FlightItinerary = {
  id: string
  price: {
    raw: number
    formatted: string
    pricingOptionId: string
  }
  legs: Array<FlightLeg>
  isSelfTransfer: boolean
  isProtectedSelfTransfer: boolean
  farePolicy: {
    isChangeAllowed: boolean
    isPartiallyChangeable: boolean
    isCancellationAllowed: boolean
    isPartiallyRefundable: boolean
  }
  eco: {
    ecoContenderDelta: number
  }
  fareAttributes: Record<string, unknown>
  isMashUp: boolean
  hasFlexibleOptions: boolean
  score: number
}

export type FlightLeg = {
  id: string
  origin: FlightLocation
  destination: FlightLocation
  durationInMinutes: number
  stopCount: number
  isSmallestStops: boolean
  departure: string
  arrival: string
  timeDeltaInDays: number
  carriers: FlightCarrier
  segments: Array<FlightSegment>
}

export type FlightLocation = {
  id: string
  entityId: string
  name: string
  displayCode: string
  city: string
  country: string
  isHighlighted: boolean
}

export type FlightCarrier = {
  marketing: Array<FlightCarrierInfo>
  operating: Array<FlightCarrierInfo>
  operationType: string
}

export type FlightCarrierInfo = {
  id: number
  logoUrl: string
  name: string
}

export type FlightSegment = {
  id: string
  origin: FlightLocation
  destination: FlightLocation
  departure: string
  arrival: string
  durationInMinutes: number
  flightNumber: string
  marketingCarrier: FlightCarrierInfo
  operatingCarrier: FlightCarrierInfo
}

export type FlightSearchResponse = {
  status: boolean
  timestamp: number
  data: {
    context: {
      status: string
      sessionId: string
      totalResults: number
    }
    itineraries: Array<FlightItinerary>
    messages: Array<unknown>
    filterStats: {
      duration: {
        min: number
        max: number
        multiCityMin: number
        multiCityMax: number
      }
      airports: Array<unknown>
      carriers: Array<unknown>
      stopPrices: {
        direct: {
          isPresent: boolean
        }
        one: {
          isPresent: boolean
        }
        twoOrMore: {
          isPresent: boolean
        }
      }
    }
    flightsSessionId: string
    destinationImageUrl: string
  }
}

export type TripType = 'round-trip' | 'one-way' | 'multi-city'

export type CabinClass = 'economy' | 'premium_economy' | 'business' | 'first'

export type SortOption = 'best' | 'cheapest' | 'fastest'

export type PassengerCounts = {
  adults: number
  children: number
  infants: number
}
