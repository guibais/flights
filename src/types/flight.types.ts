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
  cabinClass?: CabinClass
  sortBy?: 'best' | 'price_high' | 'fastest' | 'outbound_take_off_time' | 'outbound_landing_time' | 'return_take_off_time' | 'return_landing_time'
  currency?: string
  market?: string
  countryCode?: string
  locale?: string
}

export type FlightBookingLeg = {
  origin: string
  destination: string
  date: string
}

export type FlightBookingParams = {
  itineraryId: string
  legs: Array<FlightBookingLeg>
  sessionId: string
  adults?: number
  children?: number
  infants?: number
  currency?: string
  locale?: string
  market?: string
  cabinClass?: CabinClass
  countryCode?: string
}

export type CaptchaResponse = {
  status: false
  timestamp: number
  message: {
    action: 'captcha'
    uuid: string
    vid: string
    appId: string
    page: string
    collectorUrl: string
  }
}

export type CaptchaError = Error & {
  captchaData?: CaptchaResponse['message']
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

export type MultiCitySegment = {
  id: string
  origin: Airport | null
  destination: Airport | null
  date: string
}

export type MultiCitySearchParams = {
  segments: Array<MultiCitySegment>
  adults?: number
  children?: number
  infants?: number
  cabinClass?: CabinClass
  sortBy?: SortOption
  currency?: string
  market?: string
  countryCode?: string
}

export type FlightDetailsParams = {
  legs: Array<{
    origin: string
    destination: string
    date: string
  }>
  sessionId: string
  adults?: number
  children?: number
  infants?: number
  currency?: string
  locale?: string
  market?: string
  cabinClass?: CabinClass
  countryCode?: string
}

export type FlightDetailsResponse = {
  status: boolean
  timestamp: number
  data: {
    itinerary: {
      legs: Array<{
        id: string
        origin: {
          id: string
          name: string
          displayCode: string
          city: string
        }
        destination: {
          id: string
          name: string
          displayCode: string
          city: string
        }
        segments: Array<{
          id: string
          origin: {
            id: string
            name: string
            displayCode: string
            city: string
          }
          destination: {
            id: string
            name: string
            displayCode: string
            city: string
          }
          duration: number
          dayChange: number
          flightNumber: string
          departure: string
          arrival: string
          marketingCarrier: {
            id: string
            name: string
            displayCode: string
            displayCodeType: string
            logo: string
            altId: string
          }
          operatingCarrier: {
            id: string
            name: string
            displayCode: string
            displayCodeType: string
            logo: string
            altId: string
          }
        }>
        duration: number
        stopCount: number
        departure: string
        arrival: string
        dayChange: number
      }>
      pricingOptions: Array<{
        agents: Array<{
          id: string
          name: string
          isCarrier: boolean
          bookingProposition: string
          url: string
          price: number
          rating: {
            value: number
            count: number
          }
          updateStatus: string
          segments: Array<{
            id: string
            origin: {
              id: string
              name: string
              displayCode: string
              city: string
            }
            destination: {
              id: string
              name: string
              displayCode: string
              city: string
            }
            duration: number
            dayChange: number
            flightNumber: string
            departure: string
            arrival: string
            marketingCarrier: {
              id: string
              name: string
              displayCode: string
              displayCodeType: string
              logo: string
              altId: string
            }
            operatingCarrier: {
              id: string
              name: string
              displayCode: string
              displayCodeType: string
              logo: string
              altId: string
            }
          }>
          isDirectDBookUrl: boolean
          quoteAge: number
        }>
        totalPrice: number
      }>
      isTransferRequired: boolean
      destinationImage?: string
      operatingCarrierSafetyAttributes?: Array<{
        carrierID: string
        carrierName: string
        faceMasksCompulsory: boolean | null
        aircraftDeepCleanedDaily: boolean | null
        attendantsWearPPE: boolean | null
        cleaningPacksProvided: boolean | null
        foodServiceChanges: boolean | null
        safetyUrl: string | null
      }>
      flexibleTicketPolicies?: Array<any>
    }
    pollingCompleted: boolean
  }
}
