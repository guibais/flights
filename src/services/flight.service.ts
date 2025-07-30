import type {
  Airport,
  CaptchaError,
  CaptchaResponse,
  FlightBookingParams,
  FlightDetailsParams,
  FlightDetailsResponse,
  FlightSearchParams,
  FlightSearchResponse,
  MultiCitySearchParams,
} from '../types/flight.types'

const API_BASE_URL = 'https://sky-scrapper.p.rapidapi.com/api/v1/flights'

const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY || 'your-rapidapi-key-here'

const getHeaders = () => ({
  'X-RapidAPI-Key': API_KEY,
  'X-RapidAPI-Host': 'sky-scrapper.p.rapidapi.com',
  'Content-Type': 'application/json',
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  Accept: 'application/json, text/plain, */*',
  'Accept-Language': 'en-US,en;q=0.9',
  'Accept-Encoding': 'gzip, deflate, br',
  'Cache-Control': 'no-cache',
  Pragma: 'no-cache',
  'Sec-Ch-Ua':
    '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
  'Sec-Ch-Ua-Mobile': '?0',
  'Sec-Ch-Ua-Platform': '"Windows"',
  'Sec-Fetch-Dest': 'empty',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Site': 'cross-site',
  Origin: 'https://flights.app',
  Referer: 'https://flights.app/',
})

const isCaptchaResponse = (data: any): data is CaptchaResponse => {
  return (
    data &&
    data.status === false &&
    data.message &&
    data.message.action === 'captcha' &&
    data.message.page
  )
}

const createCaptchaError = (
  captchaData: CaptchaResponse['message'],
): CaptchaError => {
  const error = new Error('CAPTCHA verification required') as CaptchaError
  error.captchaData = captchaData
  return error
}

const retryWithBackoff = async <T>(
  fn: () => Promise<T>,
  maxRetries: number = 3,
  baseDelay: number = 1000,
): Promise<T> => {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await fn()
    } catch (error) {
      if ((error as CaptchaError).captchaData) {
        throw error
      }

      if (attempt === maxRetries) {
        throw error
      }

      const delay = baseDelay * Math.pow(2, attempt - 1) + Math.random() * 1000
      console.log(`Attempt ${attempt} failed, retrying in ${delay}ms...`)
      await new Promise((resolve) => setTimeout(resolve, delay))
    }
  }
  throw new Error('Max retries exceeded')
}

export const flightService = {
  async searchAirports(query: string): Promise<Array<Airport>> {
    if (!API_KEY || API_KEY === 'your-rapidapi-key-here') {
      throw new Error(
        'API key is required. Please set VITE_RAPIDAPI_KEY in your environment variables.',
      )
    }

    return retryWithBackoff(
      async () => {
        await new Promise((resolve) =>
          setTimeout(resolve, Math.random() * 500 + 200),
        )

        const response = await fetch(
          `${API_BASE_URL}/searchAirport?query=${encodeURIComponent(query)}`,
          {
            method: 'GET',
            headers: getHeaders(),
          },
        )

        if (!response.ok) {
          throw new Error(
            `API error: ${response.status} - ${response.statusText}`,
          )
        }

        const result = await response.json()

        if (isCaptchaResponse(result)) {
          throw createCaptchaError(result.message)
        }

        if (!result.data) {
          throw new Error('No data received from API')
        }

        return result.data
      },
      3,
      2000,
    )
  },

  async getNearbyAirports(
    lat: number,
    lng: number,
  ): Promise<{ current: Airport; nearby: Array<Airport> }> {
    if (!API_KEY || API_KEY === 'your-rapidapi-key-here') {
      throw new Error(
        'API key is required. Please set VITE_RAPIDAPI_KEY in your environment variables.',
      )
    }

    return retryWithBackoff(
      async () => {
        await new Promise((resolve) =>
          setTimeout(resolve, Math.random() * 500 + 200),
        )

        const response = await fetch(
          `${API_BASE_URL}/getNearByAirports?lat=${lat}&lng=${lng}`,
          {
            method: 'GET',
            headers: getHeaders(),
          },
        )

        if (!response.ok) {
          throw new Error(
            `HTTP error! status: ${response.status} - ${response.statusText}`,
          )
        }

        const result = await response.json()

        if (isCaptchaResponse(result)) {
          throw createCaptchaError(result.message)
        }

        if (!result.data) {
          throw new Error('No data received from API')
        }

        return result.data
      },
      3,
      2000,
    )
  },

  async searchFlights(
    params: FlightSearchParams,
  ): Promise<FlightSearchResponse> {
    if (!API_KEY || API_KEY === 'your-rapidapi-key-here') {
      throw new Error(
        'API key is required. Please set VITE_RAPIDAPI_KEY in your environment variables.',
      )
    }

    return retryWithBackoff(
      async () => {
        await new Promise((resolve) =>
          setTimeout(resolve, Math.random() * 1000 + 500),
        )

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
          ...(params.locale && { locale: params.locale }),
        })

        const response = await fetch(
          `${API_BASE_URL}/searchFlights?${queryParams}`,
          {
            method: 'GET',
            headers: getHeaders(),
          },
        )

        if (!response.ok) {
          throw new Error(
            `API error: ${response.status} - ${response.statusText}`,
          )
        }

        const result = await response.json()

        if (isCaptchaResponse(result)) {
          throw createCaptchaError(result.message)
        }

        if (!result.data) {
          throw new Error('No flight data received from API')
        }

        return result
      },
      2,
      3000,
    )
  },

  async searchMultiCityFlights(
    params: MultiCitySearchParams,
  ): Promise<FlightSearchResponse> {
    if (!API_KEY || API_KEY === 'your-rapidapi-key-here') {
      throw new Error(
        'API key is required. Please set VITE_RAPIDAPI_KEY in your environment variables.',
      )
    }

    return retryWithBackoff(
      async () => {
        await new Promise((resolve) =>
          setTimeout(resolve, Math.random() * 1000 + 500),
        )

        // Transform segments to the format expected by the API
        const legs = params.segments
          .filter(segment => segment.origin && segment.destination && segment.date)
          .map(segment => ({
            originSkyId: segment.origin!.skyId,
            destinationSkyId: segment.destination!.skyId,
            originEntityId: segment.origin!.entityId,
            destinationEntityId: segment.destination!.entityId,
            date: segment.date,
          }))

        if (legs.length < 2) {
          throw new Error('Multi-city search requires at least 2 flight segments')
        }

        const queryParams = new URLSearchParams({
          legs: JSON.stringify(legs),
          ...(params.adults && { adults: params.adults.toString() }),
          ...(params.children && { children: params.children.toString() }),
          ...(params.infants && { infants: params.infants.toString() }),
          ...(params.cabinClass && { cabinClass: params.cabinClass }),
          ...(params.sortBy && { sortBy: params.sortBy }),
          ...(params.currency && { currency: params.currency }),
          ...(params.market && { market: params.market }),
          ...(params.countryCode && { countryCode: params.countryCode }),
        })

        const response = await fetch(
          `${API_BASE_URL}/searchFlightsMultiStops?${queryParams}`,
          {
            method: 'GET',
            headers: getHeaders(),
          },
        )

        if (!response.ok) {
          throw new Error(
            `API error: ${response.status} - ${response.statusText}`,
          )
        }

        const result = await response.json()

        if (isCaptchaResponse(result)) {
          throw createCaptchaError(result.message)
        }

        if (!result.data) {
          throw new Error('No flight data received from API')
        }

        return result
      },
      2,
      3000,
    )
  },

  async bookFlight(params: FlightBookingParams): Promise<any> {
    const apiKey = import.meta.env.VITE_RAPIDAPI_KEY
    if (!apiKey) {
      throw new Error(
        'RapidAPI key not found. Please set VITE_RAPIDAPI_KEY in your environment variables.',
      )
    }

    await new Promise((resolve) =>
      setTimeout(resolve, Math.random() * 1000 + 500),
    )

    const queryParams = new URLSearchParams({
      itineraryId: params.itineraryId,
      legs: JSON.stringify(params.legs),
      sessionId: params.sessionId,
      ...(params.adults && { adults: params.adults.toString() }),
      ...(params.children && { children: params.children.toString() }),
      ...(params.infants && { infants: params.infants.toString() }),
      ...(params.currency && { currency: params.currency }),
      ...(params.locale && { locale: params.locale }),
      ...(params.market && { market: params.market }),
      ...(params.cabinClass && { cabinClass: params.cabinClass }),
      ...(params.countryCode && { countryCode: params.countryCode }),
    })

    const url = `https://sky-scrapper.p.rapidapi.com/api/v2/flights/bookFlight?${queryParams}`

    return await retryWithBackoff(
      async () => {
        const response = await fetch(url, {
          method: 'GET',
          headers: getHeaders(),
        })

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        console.log('Book flight response:', data)
        return data
      },
      2,
      2000,
    )
  },

  async getFlightDetails(
    params: FlightDetailsParams,
  ): Promise<FlightDetailsResponse> {
    if (!API_KEY || API_KEY === 'your-rapidapi-key-here') {
      throw new Error(
        'API key is required. Please set VITE_RAPIDAPI_KEY in your environment variables.',
      )
    }

    return retryWithBackoff(
      async () => {
        await new Promise((resolve) =>
          setTimeout(resolve, Math.random() * 1000 + 500),
        )

        const queryParams = new URLSearchParams({
          legs: JSON.stringify(params.legs),
          sessionId: params.sessionId,
          ...(params.adults && { adults: params.adults.toString() }),
          ...(params.children && { children: params.children.toString() }),
          ...(params.infants && { infants: params.infants.toString() }),
          ...(params.currency && { currency: params.currency }),
          ...(params.locale && { locale: params.locale }),
          ...(params.market && { market: params.market }),
          ...(params.cabinClass && { cabinClass: params.cabinClass }),
          ...(params.countryCode && { countryCode: params.countryCode }),
        })

        const response = await fetch(
          `${API_BASE_URL}/getFlightDetails?${queryParams}`,
          {
            method: 'GET',
            headers: getHeaders(),
          },
        )

        if (!response.ok) {
          throw new Error(
            `API error: ${response.status} - ${response.statusText}`,
          )
        }

        const result = await response.json()

        if (isCaptchaResponse(result)) {
          throw createCaptchaError(result.message)
        }

        return result
      },
      2,
      3000,
    )
  },
}
