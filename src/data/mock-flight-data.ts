import type { Airport, FlightSearchResponse } from '../types/flight.types'

export const mockAirports: Array<Airport> = [
  {
    skyId: 'GRU',
    entityId: '95673320',
    presentation: {
      title: 'São Paulo Guarulhos',
      suggestionTitle: 'São Paulo Guarulhos (GRU)',
      subtitle: 'Brazil',
    },
    navigation: {
      entityId: '95673320',
      entityType: 'AIRPORT',
      localizedName: 'São Paulo Guarulhos',
      relevantFlightParams: {
        skyId: 'GRU',
        entityId: '95673320',
        flightPlaceType: 'AIRPORT',
        localizedName: 'São Paulo Guarulhos',
      },
      relevantHotelParams: {
        entityId: '27539520',
        entityType: 'CITY',
        localizedName: 'São Paulo',
      },
    },
  },
  {
    skyId: 'LAX',
    entityId: '95565059',
    presentation: {
      title: 'Los Angeles',
      suggestionTitle: 'Los Angeles (LAX)',
      subtitle: 'United States',
    },
    navigation: {
      entityId: '95565059',
      entityType: 'AIRPORT',
      localizedName: 'Los Angeles',
      relevantFlightParams: {
        skyId: 'LAX',
        entityId: '95565059',
        flightPlaceType: 'AIRPORT',
        localizedName: 'Los Angeles',
      },
      relevantHotelParams: {
        entityId: '27537542',
        entityType: 'CITY',
        localizedName: 'Los Angeles',
      },
    },
  },
  {
    skyId: 'JFK',
    entityId: '95565058',
    presentation: {
      title: 'New York John F. Kennedy',
      suggestionTitle: 'New York John F. Kennedy (JFK)',
      subtitle: 'United States',
    },
    navigation: {
      entityId: '95565058',
      entityType: 'AIRPORT',
      localizedName: 'New York John F. Kennedy',
      relevantFlightParams: {
        skyId: 'JFK',
        entityId: '95565058',
        flightPlaceType: 'AIRPORT',
        localizedName: 'New York John F. Kennedy',
      },
      relevantHotelParams: {
        entityId: '27537542',
        entityType: 'CITY',
        localizedName: 'New York',
      },
    },
  },
]

export const mockFlightResponse: FlightSearchResponse = {
  status: true,
  timestamp: Date.now(),
  data: {
    context: {
      status: 'complete',
      sessionId: 'mock-session',
      totalResults: 2,
    },
    itineraries: [
      {
        id: 'mock-flight-1',
        price: {
          raw: 850.50,
          formatted: '$850',
          pricingOptionId: 'mock-option-1',
        },
        legs: [
          {
            id: 'leg-1',
            origin: {
              id: 'GRU',
              entityId: '95673320',
              name: 'São Paulo Guarulhos',
              displayCode: 'GRU',
              city: 'São Paulo',
              country: 'Brazil',
              isHighlighted: false,
            },
            destination: {
              id: 'LAX',
              entityId: '95565059',
              name: 'Los Angeles International',
              displayCode: 'LAX',
              city: 'Los Angeles',
              country: 'United States',
              isHighlighted: false,
            },
            durationInMinutes: 720, // 12 hours
            stopCount: 0,
            isSmallestStops: true,
            departure: '2023-12-15T10:30:00',
            arrival: '2023-12-15T16:30:00',
            timeDeltaInDays: 0,
            carriers: {
              marketing: [
                {
                  id: 1,
                  logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/LA.png',
                  name: 'LATAM Airlines',
                },
              ],
              operating: [
                {
                  id: 1,
                  logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/LA.png',
                  name: 'LATAM Airlines',
                },
              ],
              operationType: 'fully_operated',
            },
            segments: [
              {
                id: 'segment-1',
                origin: {
                  id: 'GRU',
                  entityId: '95673320',
                  name: 'São Paulo Guarulhos',
                  displayCode: 'GRU',
                  city: 'São Paulo',
                  country: 'Brazil',
                  isHighlighted: false,
                },
                destination: {
                  id: 'LAX',
                  entityId: '95565059',
                  name: 'Los Angeles International',
                  displayCode: 'LAX',
                  city: 'Los Angeles',
                  country: 'United States',
                  isHighlighted: false,
                },
                departure: '2023-12-15T10:30:00',
                arrival: '2023-12-15T16:30:00',
                durationInMinutes: 720,
                flightNumber: 'LA 8084',
                marketingCarrier: {
                  id: 1,
                  logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/LA.png',
                  name: 'LATAM Airlines',
                },
                operatingCarrier: {
                  id: 1,
                  logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/LA.png',
                  name: 'LATAM Airlines',
                },
              },
            ],
          },
        ],
        isSelfTransfer: false,
        isProtectedSelfTransfer: false,
        farePolicy: {
          isChangeAllowed: true,
          isPartiallyChangeable: false,
          isCancellationAllowed: false,
          isPartiallyRefundable: false,
        },
        eco: {
          ecoContenderDelta: 0,
        },
        fareAttributes: {},
        isMashUp: false,
        hasFlexibleOptions: false,
        score: 0.85,
      },
      {
        id: 'mock-flight-2',
        price: {
          raw: 1250.75,
          formatted: '$1,251',
          pricingOptionId: 'mock-option-2',
        },
        legs: [
          {
            id: 'leg-2',
            origin: {
              id: 'GRU',
              entityId: '95673320',
              name: 'São Paulo Guarulhos',
              displayCode: 'GRU',
              city: 'São Paulo',
              country: 'Brazil',
              isHighlighted: false,
            },
            destination: {
              id: 'LAX',
              entityId: '95565059',
              name: 'Los Angeles International',
              displayCode: 'LAX',
              city: 'Los Angeles',
              country: 'United States',
              isHighlighted: false,
            },
            durationInMinutes: 540, // 9 hours
            stopCount: 1,
            isSmallestStops: false,
            departure: '2023-12-15T14:15:00',
            arrival: '2023-12-15T20:15:00',
            timeDeltaInDays: 0,
            carriers: {
              marketing: [
                {
                  id: 2,
                  logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/AA.png',
                  name: 'American Airlines',
                },
              ],
              operating: [
                {
                  id: 2,
                  logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/AA.png',
                  name: 'American Airlines',
                },
              ],
              operationType: 'fully_operated',
            },
            segments: [
              {
                id: 'segment-2a',
                origin: {
                  id: 'GRU',
                  entityId: '95673320',
                  name: 'São Paulo Guarulhos',
                  displayCode: 'GRU',
                  city: 'São Paulo',
                  country: 'Brazil',
                  isHighlighted: false,
                },
                destination: {
                  id: 'MIA',
                  entityId: '95565060',
                  name: 'Miami International',
                  displayCode: 'MIA',
                  city: 'Miami',
                  country: 'United States',
                  isHighlighted: false,
                },
                departure: '2023-12-15T14:15:00',
                arrival: '2023-12-15T17:30:00',
                durationInMinutes: 315,
                flightNumber: 'AA 963',
                marketingCarrier: {
                  id: 2,
                  logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/AA.png',
                  name: 'American Airlines',
                },
                operatingCarrier: {
                  id: 2,
                  logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/AA.png',
                  name: 'American Airlines',
                },
              },
              {
                id: 'segment-2b',
                origin: {
                  id: 'MIA',
                  entityId: '95565060',
                  name: 'Miami International',
                  displayCode: 'MIA',
                  city: 'Miami',
                  country: 'United States',
                  isHighlighted: false,
                },
                destination: {
                  id: 'LAX',
                  entityId: '95565059',
                  name: 'Los Angeles International',
                  displayCode: 'LAX',
                  city: 'Los Angeles',
                  country: 'United States',
                  isHighlighted: false,
                },
                departure: '2023-12-15T18:45:00',
                arrival: '2023-12-15T20:15:00',
                durationInMinutes: 225,
                flightNumber: 'AA 1247',
                marketingCarrier: {
                  id: 2,
                  logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/AA.png',
                  name: 'American Airlines',
                },
                operatingCarrier: {
                  id: 2,
                  logoUrl: 'https://logos.skyscnr.com/images/airlines/favicon/AA.png',
                  name: 'American Airlines',
                },
              },
            ],
          },
        ],
        isSelfTransfer: false,
        isProtectedSelfTransfer: false,
        farePolicy: {
          isChangeAllowed: true,
          isPartiallyChangeable: true,
          isCancellationAllowed: true,
          isPartiallyRefundable: true,
        },
        eco: {
          ecoContenderDelta: 15,
        },
        fareAttributes: {},
        isMashUp: false,
        hasFlexibleOptions: true,
        score: 0.72,
      },
    ],
    messages: [],
    filterStats: {
      duration: {
        min: 540,
        max: 720,
        multiCityMin: 540,
        multiCityMax: 720,
      },
      airports: [],
      carriers: [],
      stopPrices: {
        direct: {
          isPresent: true,
        },
        one: {
          isPresent: true,
        },
        twoOrMore: {
          isPresent: false,
        },
      },
    },
    flightsSessionId: 'mock-session-id',
    destinationImageUrl: 'https://content.skyscnr.com/96508dbf842a0d866c8649c8dd6a69d5/GettyImages-1146431497.jpg',
  },
}
