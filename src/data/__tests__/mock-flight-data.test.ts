import { mockAirports, mockFlightResponse } from '../mock-flight-data'
import type { Airport } from '../../types/flight.types'

describe('Mock Flight Data', () => {
  describe('mockAirports', () => {
    it('should have the correct structure for all airports', () => {
      expect(mockAirports).toHaveLength(3)

      mockAirports.forEach((airport: Airport) => {
        expect(airport).toHaveProperty('skyId')
        expect(airport).toHaveProperty('entityId')
        expect(airport).toHaveProperty('presentation')
        expect(airport).toHaveProperty('navigation')

        expect(airport.presentation).toHaveProperty('title')
        expect(airport.presentation).toHaveProperty('suggestionTitle')
        expect(airport.presentation).toHaveProperty('subtitle')

        expect(airport.navigation).toHaveProperty('entityId')
        expect(airport.navigation).toHaveProperty('entityType')
        expect(airport.navigation).toHaveProperty('localizedName')
        expect(airport.navigation).toHaveProperty('relevantFlightParams')
        expect(airport.navigation).toHaveProperty('relevantHotelParams')
      })
    })

    it('should contain GRU airport', () => {
      const gruAirport = mockAirports.find((airport) => airport.skyId === 'GRU')

      expect(gruAirport).toBeDefined()
      expect(gruAirport?.presentation.title).toBe('São Paulo Guarulhos')
      expect(gruAirport?.presentation.subtitle).toBe('Brazil')
    })

    it('should contain LAX airport', () => {
      const laxAirport = mockAirports.find((airport) => airport.skyId === 'LAX')

      expect(laxAirport).toBeDefined()
      expect(laxAirport?.presentation.title).toBe('Los Angeles')
      expect(laxAirport?.presentation.subtitle).toBe('United States')
    })

    it('should contain JFK airport', () => {
      const jfkAirport = mockAirports.find((airport) => airport.skyId === 'JFK')

      expect(jfkAirport).toBeDefined()
      expect(jfkAirport?.presentation.title).toBe('New York John F. Kennedy')
      expect(jfkAirport?.presentation.subtitle).toBe('United States')
    })

    it('should have valid entity types', () => {
      mockAirports.forEach((airport: Airport) => {
        expect(['AIRPORT', 'CITY']).toContain(airport.navigation.entityType)
        expect(['AIRPORT', 'CITY']).toContain(
          airport.navigation.relevantFlightParams.flightPlaceType,
        )
        expect(['AIRPORT', 'CITY']).toContain(
          airport.navigation.relevantHotelParams.entityType,
        )
      })
    })
  })

  describe('mockFlightResponse', () => {
    it('should have the correct top-level structure', () => {
      expect(mockFlightResponse).toHaveProperty('status', true)
      expect(mockFlightResponse).toHaveProperty('timestamp')
      expect(mockFlightResponse).toHaveProperty('data')
      expect(typeof mockFlightResponse.timestamp).toBe('number')
    })

    it('should have valid context data', () => {
      const { context } = mockFlightResponse.data

      expect(context).toHaveProperty('status', 'complete')
      expect(context).toHaveProperty('sessionId', 'mock-session')
      expect(context).toHaveProperty('totalResults', 2)
    })

    it('should contain flight itineraries', () => {
      const { itineraries } = mockFlightResponse.data

      expect(itineraries).toHaveLength(2)

      itineraries.forEach((itinerary) => {
        expect(itinerary).toHaveProperty('id')
        expect(itinerary).toHaveProperty('price')
        expect(itinerary).toHaveProperty('legs')
        expect(itinerary).toHaveProperty('farePolicy')
        expect(itinerary).toHaveProperty('score')

        expect(itinerary.price).toHaveProperty('raw')
        expect(itinerary.price).toHaveProperty('formatted')
        expect(itinerary.price).toHaveProperty('pricingOptionId')

        expect(typeof itinerary.price.raw).toBe('number')
        expect(typeof itinerary.price.formatted).toBe('string')
        expect(typeof itinerary.score).toBe('number')
      })
    })

    it('should have valid flight legs', () => {
      const { itineraries } = mockFlightResponse.data

      itineraries.forEach((itinerary) => {
        expect(itinerary.legs).toHaveLength(1)

        itinerary.legs.forEach((leg) => {
          expect(leg).toHaveProperty('id')
          expect(leg).toHaveProperty('origin')
          expect(leg).toHaveProperty('destination')
          expect(leg).toHaveProperty('departure')
          expect(leg).toHaveProperty('arrival')
          expect(leg).toHaveProperty('durationInMinutes')
          expect(leg).toHaveProperty('stopCount')
          expect(leg).toHaveProperty('carriers')
          expect(leg).toHaveProperty('segments')

          expect(typeof leg.durationInMinutes).toBe('number')
          expect(typeof leg.stopCount).toBe('number')
          expect(Array.isArray(leg.segments)).toBe(true)
        })
      })
    })

    it('should have valid flight segments', () => {
      const { itineraries } = mockFlightResponse.data

      itineraries.forEach((itinerary) => {
        itinerary.legs.forEach((leg) => {
          leg.segments.forEach((segment) => {
            expect(segment).toHaveProperty('id')
            expect(segment).toHaveProperty('origin')
            expect(segment).toHaveProperty('destination')
            expect(segment).toHaveProperty('departure')
            expect(segment).toHaveProperty('arrival')
            expect(segment).toHaveProperty('durationInMinutes')
            expect(segment).toHaveProperty('flightNumber')
            expect(segment).toHaveProperty('marketingCarrier')
            expect(segment).toHaveProperty('operatingCarrier')

            expect(typeof segment.durationInMinutes).toBe('number')
            expect(typeof segment.flightNumber).toBe('string')
          })
        })
      })
    })

    it('should have valid carrier information', () => {
      const { itineraries } = mockFlightResponse.data

      itineraries.forEach((itinerary) => {
        itinerary.legs.forEach((leg) => {
          expect(leg.carriers).toHaveProperty('marketing')
          expect(leg.carriers).toHaveProperty('operating')
          expect(leg.carriers).toHaveProperty('operationType')

          expect(Array.isArray(leg.carriers.marketing)).toBe(true)
          expect(Array.isArray(leg.carriers.operating)).toBe(true)

          leg.carriers.marketing.forEach((carrier) => {
            expect(carrier).toHaveProperty('id')
            expect(carrier).toHaveProperty('name')
            expect(carrier).toHaveProperty('logoUrl')

            expect(typeof carrier.id).toBe('number')
            expect(typeof carrier.name).toBe('string')
            expect(typeof carrier.logoUrl).toBe('string')
          })
        })
      })
    })

    it('should have valid fare policy', () => {
      const { itineraries } = mockFlightResponse.data

      itineraries.forEach((itinerary) => {
        const { farePolicy } = itinerary

        expect(farePolicy).toHaveProperty('isChangeAllowed')
        expect(farePolicy).toHaveProperty('isPartiallyChangeable')
        expect(farePolicy).toHaveProperty('isCancellationAllowed')
        expect(farePolicy).toHaveProperty('isPartiallyRefundable')

        expect(typeof farePolicy.isChangeAllowed).toBe('boolean')
        expect(typeof farePolicy.isPartiallyChangeable).toBe('boolean')
        expect(typeof farePolicy.isCancellationAllowed).toBe('boolean')
        expect(typeof farePolicy.isPartiallyRefundable).toBe('boolean')
      })
    })

    it('should have valid filter stats', () => {
      const { filterStats } = mockFlightResponse.data

      expect(filterStats).toHaveProperty('duration')
      expect(filterStats).toHaveProperty('airports')
      expect(filterStats).toHaveProperty('carriers')
      expect(filterStats).toHaveProperty('stopPrices')

      expect(filterStats.duration).toHaveProperty('min')
      expect(filterStats.duration).toHaveProperty('max')
      expect(filterStats.duration).toHaveProperty('multiCityMin')
      expect(filterStats.duration).toHaveProperty('multiCityMax')

      expect(typeof filterStats.duration.min).toBe('number')
      expect(typeof filterStats.duration.max).toBe('number')

      expect(filterStats.stopPrices).toHaveProperty('direct')
      expect(filterStats.stopPrices).toHaveProperty('one')
      expect(filterStats.stopPrices).toHaveProperty('twoOrMore')

      expect(typeof filterStats.stopPrices.direct.isPresent).toBe('boolean')
      expect(typeof filterStats.stopPrices.one.isPresent).toBe('boolean')
      expect(typeof filterStats.stopPrices.twoOrMore.isPresent).toBe('boolean')
    })

    it('should have different flight options', () => {
      const { itineraries } = mockFlightResponse.data

      expect(itineraries[0].id).toBe('mock-flight-1')
      expect(itineraries[1].id).toBe('mock-flight-2')

      expect(itineraries[0].legs[0].stopCount).toBe(0)

      expect(itineraries[1].legs[0].stopCount).toBe(1)
    })

    it('should have realistic price differences', () => {
      const { itineraries } = mockFlightResponse.data

      expect(itineraries[0].price.raw).toBe(850.5)
      expect(itineraries[1].price.raw).toBe(1250.75)

      expect(itineraries[1].price.raw).toBeGreaterThan(itineraries[0].price.raw)
    })

    it('should have valid date formats', () => {
      const { itineraries } = mockFlightResponse.data

      itineraries.forEach((itinerary) => {
        itinerary.legs.forEach((leg) => {
          expect(() => new Date(leg.departure)).not.toThrow()
          expect(() => new Date(leg.arrival)).not.toThrow()

          leg.segments.forEach((segment) => {
            expect(() => new Date(segment.departure)).not.toThrow()
            expect(() => new Date(segment.arrival)).not.toThrow()
          })
        })
      })
    })
  })

  describe('Data consistency', () => {
    it('should have consistent airport codes between airports and flights', () => {
      const airportCodes = mockAirports.map((airport) => airport.skyId)
      const { itineraries } = mockFlightResponse.data

      itineraries.forEach((itinerary) => {
        itinerary.legs.forEach((leg) => {
          expect(airportCodes).toContain(leg.origin.id)
          expect(airportCodes).toContain(leg.destination.id)
        })
      })
    })

    it('should have matching segment count with stop count', () => {
      const { itineraries } = mockFlightResponse.data

      itineraries.forEach((itinerary) => {
        itinerary.legs.forEach((leg) => {
          expect(leg.segments.length).toBe(leg.stopCount + 1)
        })
      })
    })
  })
})
