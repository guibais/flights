import { useEffect } from 'react'
import type {
  Airport,
  FlightSearchParams,
  MultiCitySearchParams,
} from '../types/flight.types'

type SEOProps = {
  title?: string
  description?: string
  keywords?: Array<string>
  origin?: Airport | null
  destination?: Airport | null
  searchParams?: FlightSearchParams | MultiCitySearchParams | null
  canonical?: string
}

type JsonLdData = {
  '@context': string
  '@type': string
  [key: string]: any
}

export function SEO({
  title,
  description,
  keywords = [],
  origin,
  destination,
  searchParams,
  canonical,
}: SEOProps) {
  const defaultTitle = 'SkySearch - Find and Compare Flight Deals'
  const defaultDescription =
    'Search and compare flight prices from multiple airlines. Find the best deals on flights worldwide with our comprehensive flight search engine.'
  const defaultKeywords = [
    'flights',
    'flight search',
    'cheap flights',
    'airline tickets',
    'flight comparison',
    'travel deals',
    'flight booking',
    'airfare',
  ]

  const finalTitle = title || defaultTitle
  const finalDescription = description || defaultDescription
  const finalKeywords = [...defaultKeywords, ...keywords]

  const generateSearchTitle = (): string => {
    if (origin && destination) {
      return `Flights from ${origin.presentation.title} to ${destination.presentation.title} - SkySearch`
    }
    if (origin) {
      return `Flights from ${origin.presentation.title} - SkySearch`
    }
    if (destination) {
      return `Flights to ${destination.presentation.title} - SkySearch`
    }
    return finalTitle
  }

  const generateSearchDescription = (): string => {
    if (origin && destination) {
      const tripType =
        searchParams && 'returnDate' in searchParams && searchParams.returnDate
          ? 'round-trip'
          : 'one-way'
      return `Find ${tripType} flights from ${origin.presentation.title} to ${destination.presentation.title}. Compare prices and book the best deals.`
    }
    if (origin) {
      return `Find flights departing from ${origin.presentation.title}. Compare prices from multiple airlines.`
    }
    if (destination) {
      return `Find flights to ${destination.presentation.title}. Compare prices and book the best deals.`
    }
    return finalDescription
  }

  const pageTitle = origin || destination ? generateSearchTitle() : finalTitle
  const pageDescription =
    origin || destination ? generateSearchDescription() : finalDescription

  const generateJsonLd = (): Array<JsonLdData> => {
    const jsonLdData: Array<JsonLdData> = []

    jsonLdData.push({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'SkySearch',
      description: 'Flight search and comparison platform',
      url: window.location.origin,
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${window.location.origin}/?originSkyId={origin}&destinationSkyId={destination}&date={date}`,
        },
        'query-input': 'required name=origin name=destination name=date',
      },
    })

    jsonLdData.push({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'SkySearch',
      description: 'Flight search and booking platform',
      url: window.location.origin,
      logo: `${window.location.origin}/logo.png`,
      sameAs: [],
    })

    jsonLdData.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Flight Search Service',
      description: 'Compare and book flights from multiple airlines',
      provider: {
        '@type': 'Organization',
        name: 'SkySearch',
      },
      serviceType: 'Flight Booking',
      areaServed: 'Worldwide',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: window.location.origin,
        serviceType: 'Online',
      },
    })

    if (origin && destination && searchParams) {
      const flightSearchSchema: JsonLdData = {
        '@context': 'https://schema.org',
        '@type': 'FlightReservation',
        reservationFor: {
          '@type': 'Flight',
          departureAirport: {
            '@type': 'Airport',
            name: origin.presentation.title,
            identifier: origin.skyId,
            address: {
              '@type': 'PostalAddress',
              addressLocality: origin.navigation.localizedName,
            },
          },
          arrivalAirport: {
            '@type': 'Airport',
            name: destination.presentation.title,
            identifier: destination.skyId,
            address: {
              '@type': 'PostalAddress',
              addressLocality: destination.navigation.localizedName,
            },
          },
        },
      }

      if ('date' in searchParams) {
        flightSearchSchema.reservationFor.departureTime = searchParams.date
        if (searchParams.returnDate) {
          flightSearchSchema.reservationFor.arrivalTime =
            searchParams.returnDate
        }
      }

      jsonLdData.push(flightSearchSchema)
    }

    return jsonLdData
  }

  useEffect(() => {
    document.title = pageTitle

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', pageDescription)
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = pageDescription
      document.head.appendChild(meta)
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', finalKeywords.join(', '))
    } else {
      const meta = document.createElement('meta')
      meta.name = 'keywords'
      meta.content = finalKeywords.join(', ')
      document.head.appendChild(meta)
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]')
    const canonicalUrl = canonical || window.location.href
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonicalUrl)
    } else {
      const link = document.createElement('link')
      link.rel = 'canonical'
      link.href = canonicalUrl
      document.head.appendChild(link)
    }

    const updateMetaProperty = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`)
      if (meta) {
        meta.setAttribute('content', content)
      } else {
        meta = document.createElement('meta')
        meta.setAttribute('property', property)
        meta.setAttribute('content', content)
        document.head.appendChild(meta)
      }
    }

    updateMetaProperty('og:title', pageTitle)
    updateMetaProperty('og:description', pageDescription)
    updateMetaProperty('og:type', 'website')
    updateMetaProperty('og:url', window.location.href)
    updateMetaProperty('og:site_name', 'SkySearch')
    updateMetaProperty('og:image', `${window.location.origin}/og-image.png`)

    const updateTwitterMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`)
      if (meta) {
        meta.setAttribute('content', content)
      } else {
        meta = document.createElement('meta')
        meta.setAttribute('name', name)
        meta.setAttribute('content', content)
        document.head.appendChild(meta)
      }
    }

    updateTwitterMeta('twitter:card', 'summary_large_image')
    updateTwitterMeta('twitter:title', pageTitle)
    updateTwitterMeta('twitter:description', pageDescription)
    updateTwitterMeta(
      'twitter:image',
      `${window.location.origin}/twitter-image.png`,
    )

    let viewportMeta = document.querySelector('meta[name="viewport"]')
    if (!viewportMeta) {
      viewportMeta = document.createElement('meta')
      viewportMeta.setAttribute('name', 'viewport')
      viewportMeta.setAttribute(
        'content',
        'width=device-width, initial-scale=1.0',
      )
      document.head.appendChild(viewportMeta)
    }

    let robotsMeta = document.querySelector('meta[name="robots"]')
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta')
      robotsMeta.setAttribute('name', 'robots')
      robotsMeta.setAttribute(
        'content',
        'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
      )
      document.head.appendChild(robotsMeta)
    }

    const jsonLdData = generateJsonLd()

    const existingScripts = document.querySelectorAll(
      'script[type="application/ld+json"]',
    )
    existingScripts.forEach((script) => script.remove())

    jsonLdData.forEach((data, index) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = `jsonld-${index}`
      script.textContent = JSON.stringify(data, null, 2)
      document.head.appendChild(script)
    })

    return () => {
      const scripts = document.querySelectorAll(
        'script[type="application/ld+json"]',
      )
      scripts.forEach((script) => script.remove())
    }
  }, [
    pageTitle,
    pageDescription,
    finalKeywords,
    origin,
    destination,
    searchParams,
    canonical,
  ])

  return null
}
