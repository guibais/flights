import type { Airport, FlightSearchParams, FlightSearchResponse } from '../types/flight.types'
import { mockAirports, mockFlightResponse } from '../data/mock-flight-data'

const API_BASE_URL = 'https://sky-scrapper.p.rapidapi.com/api/v1/flights'

// You'll need to set this in your environment variables
const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY || 'your-rapidapi-key-here'

const headers = {
  'X-RapidAPI-Key': API_KEY,
  'X-RapidAPI-Host': 'sky-scrapper.p.rapidapi.com',
  'Content-Type': 'application/json',
}

const isDemoMode = !API_KEY || API_KEY === 'your-rapidapi-key-here'

export const flightService = {
  async searchAirports(query: string): Promise<Array<Airport>> {
    // Use mock data in demo mode or when API fails
    if (isDemoMode) {
      console.log('Demo mode: Using mock airport data')
      return mockAirports.filter(airport => 
        airport.presentation.title.toLowerCase().includes(query.toLowerCase()) ||
        airport.presentation.subtitle.toLowerCase().includes(query.toLowerCase()) ||
        airport.skyId.toLowerCase().includes(query.toLowerCase())
      )
    }

    try {
      const response = await fetch(`${API_BASE_URL}/searchAirport?query=${encodeURIComponent(query)}`, {
        method: 'GET',
        headers,
      })
      
      if (!response.ok) {
        console.warn(`API error (${response.status}), falling back to mock data`)
        return mockAirports.filter(airport => 
          airport.presentation.title.toLowerCase().includes(query.toLowerCase()) ||
          airport.presentation.subtitle.toLowerCase().includes(query.toLowerCase()) ||
          airport.skyId.toLowerCase().includes(query.toLowerCase())
        )
      }
      
      const result = await response.json()
      return result.data || []
    } catch (error) {
      console.error('Error searching airports, using mock data:', error)
      return mockAirports.filter(airport => 
        airport.presentation.title.toLowerCase().includes(query.toLowerCase()) ||
        airport.presentation.subtitle.toLowerCase().includes(query.toLowerCase()) ||
        airport.skyId.toLowerCase().includes(query.toLowerCase())
      )
    }
  },

  async getNearbyAirports(lat: number, lng: number): Promise<{ current: Airport; nearby: Array<Airport> }> {
    try {
      const response = await fetch(`${API_BASE_URL}/getNearByAirports?lat=${lat}&lng=${lng}`, {
        method: 'GET',
        headers,
      })
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const result = await response.json()
      return result.data
    } catch (error) {
      console.error('Error getting nearby airports:', error)
      throw error
    }
  },

  async searchFlights(params: FlightSearchParams): Promise<FlightSearchResponse> {
    // Use mock data in demo mode or when API fails
    if (isDemoMode) {
      console.log('Demo mode: Using mock flight data')
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      return mockFlightResponse
    }

    try {
      const queryParams = new URLSearchParams({
        originSkyId: params.originSkyId,
        destinationSkyId: params.destinationSkyId,
        originEntityId: params.originEntityId,
        destinationEntityId: params.destinationEntityId,
        date: params.date,
        ...(params.returnDate && { returnDate: params.returnDate }),
        ...(params.adults && { adults: params.adults.toString() }),
        ...(params.children && { children: params.children.toString() }),
        ...(params.infants && { infants: params.infants.toString() }),
        ...(params.cabinClass && { cabinClass: params.cabinClass }),
        ...(params.sortBy && { sortBy: params.sortBy }),
        ...(params.currency && { currency: params.currency }),
        ...(params.market && { market: params.market }),
        ...(params.countryCode && { countryCode: params.countryCode }),
      })

      const response = await fetch(`${API_BASE_URL}/searchFlights?${queryParams}`, {
        method: 'GET',
        headers,
      })
      
      if (!response.ok) {
        console.warn(`API error (${response.status}), falling back to mock data`)
        await new Promise(resolve => setTimeout(resolve, 500))
        return mockFlightResponse
      }
      
      const result = await response.json()
      
      // Detectar CAPTCHA ou outros bloqueios
      if (result && (result.status === false || result.message?.action === 'captcha')) {
        console.warn('API blocked by CAPTCHA or security check, using mock data')
        await new Promise(resolve => setTimeout(resolve, 500))
        return mockFlightResponse
      }
      
      return result
    } catch (error) {
      console.error('Error searching flights, using mock data:', error)
      await new Promise(resolve => setTimeout(resolve, 500))
      return mockFlightResponse
    }
  },
}
