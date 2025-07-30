import { fireEvent, render, screen } from '@testing-library/react'
import { FlightCard } from '../FlightCard'
import { mockFlightResponse } from '../../data/mock-flight-data'
import type {
  Airport,
  FlightItinerary,
  PassengerCounts,
} from '../../types/flight.types'

jest.mock('../FlightBookingModal', () => ({
  FlightBookingModal: ({
    isOpen,
    onClose,
  }: {
    isOpen: boolean
    onClose: () => void
  }) => (
    <div
      data-testid="flight-booking-modal"
      style={{ display: isOpen ? 'block' : 'none' }}
    >
      <button onClick={onClose} data-testid="close-modal">
        Close Modal
      </button>
    </div>
  ),
}))

describe('FlightCard', () => {
  const mockOrigin: Airport = {
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
  }

  const mockDestination: Airport = {
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
  }

  const mockItinerary: FlightItinerary = mockFlightResponse.data.itineraries[0]

  const defaultProps = {
    itinerary: mockItinerary,
    origin: mockOrigin,
    destination: mockDestination,
  }

  const mockPassengers: PassengerCounts = {
    adults: 2,
    children: 1,
    infants: 0,
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('Basic rendering', () => {
    it('renders flight card with basic information', () => {
      render(<FlightCard {...defaultProps} />)

      expect(screen.getByText('$850')).toBeInTheDocument()
      expect(screen.getByText('GRU')).toBeInTheDocument()
      expect(screen.getByText('LAX')).toBeInTheDocument()
      expect(screen.getByText('LATAM Airlines')).toBeInTheDocument()
    })

    it('renders with custom passenger counts', () => {
      render(<FlightCard {...defaultProps} passengers={mockPassengers} />)

      expect(screen.getByText('$850')).toBeInTheDocument()
    })

    it('uses default passenger counts when not provided', () => {
      render(<FlightCard {...defaultProps} />)

      expect(screen.getByText('$850')).toBeInTheDocument()
    })
  })

  describe('Flight information display', () => {
    it('displays flight times correctly', () => {
      render(<FlightCard {...defaultProps} />)

      expect(screen.getByText('10:30')).toBeInTheDocument()
      expect(screen.getByText('16:30')).toBeInTheDocument()
    })

    it('displays flight duration', () => {
      render(<FlightCard {...defaultProps} />)

      expect(screen.getByText('12h 0m')).toBeInTheDocument()
    })

    it('displays stop information correctly', () => {
      render(<FlightCard {...defaultProps} />)

      expect(screen.getByText('Nonstop')).toBeInTheDocument()
    })

    it('displays airline logo when available', () => {
      render(<FlightCard {...defaultProps} />)

      const airlineLogo = screen.getByAltText('LATAM Airlines')
      expect(airlineLogo).toBeInTheDocument()
      expect(airlineLogo).toHaveAttribute(
        'src',
        'https://logos.skyscnr.com/images/airlines/favicon/LA.png',
      )
    })

    it('displays plane icon when airline logo is not available', () => {
      const itineraryWithoutLogo = {
        ...mockItinerary,
        legs: [
          {
            ...mockItinerary.legs[0],
            carriers: {
              ...mockItinerary.legs[0].carriers,
              marketing: [
                {
                  ...mockItinerary.legs[0].carriers.marketing[0],
                  logoUrl: '',
                },
              ],
            },
          },
        ],
      }

      render(<FlightCard {...defaultProps} itinerary={itineraryWithoutLogo} />)

      expect(screen.getByTestId('plane-icon')).toBeInTheDocument()
    })
  })

  describe('Expandable details', () => {
    it('expands to show detailed flight information when clicked', () => {
      render(<FlightCard {...defaultProps} />)

      const expandButton = screen.getByRole('button', {
        name: /flight details/i,
      })
      fireEvent.click(expandButton)

      expect(screen.getByText('Fare information')).toBeInTheDocument()
    })

    it('collapses detailed information when clicked again', () => {
      render(<FlightCard {...defaultProps} />)

      const expandButton = screen.getByRole('button', {
        name: /flight details/i,
      })

      fireEvent.click(expandButton)
      expect(screen.getByText('Fare information')).toBeInTheDocument()

      fireEvent.click(expandButton)
      expect(screen.queryByText('Fare information')).not.toBeInTheDocument()
    })

    it('shows chevron down icon when collapsed', () => {
      render(<FlightCard {...defaultProps} />)

      expect(screen.getAllByTestId('chevron-down').length).toBeGreaterThan(0)
    })

    it('shows chevron up icon when expanded', () => {
      render(<FlightCard {...defaultProps} />)

      const expandButton = screen.getByRole('button', {
        name: /flight details/i,
      })
      fireEvent.click(expandButton)

      expect(screen.getAllByTestId('chevron-up').length).toBeGreaterThan(0)
    })
  })

  describe('Booking functionality', () => {
    it('calls onBookingModalOpen when select button is clicked', () => {
      const mockOnBookingModalOpen = jest.fn()
      
      render(
        <FlightCard 
          {...defaultProps} 
          onBookingModalOpen={mockOnBookingModalOpen}
        />
      )

      const selectButton = screen.getByText('Select')
      fireEvent.click(selectButton)

      expect(mockOnBookingModalOpen).toHaveBeenCalledWith(mockItinerary)
    })

    it('does not crash when onBookingModalOpen is not provided', () => {
      render(<FlightCard {...defaultProps} />)

      const selectButton = screen.getByText('Select')
      
      expect(() => {
        fireEvent.click(selectButton)
      }).not.toThrow()
    })
  })

  describe('Fare policy display', () => {
    it('displays fare policy information when expanded', () => {
      render(<FlightCard {...defaultProps} />)

      const expandButton = screen.getByRole('button', {
        name: /flight details/i,
      })
      fireEvent.click(expandButton)

      expect(screen.getByText('Changes:')).toBeInTheDocument()
      expect(screen.getByText('Cancellation:')).toBeInTheDocument()
      expect(screen.getByText('Allowed')).toBeInTheDocument()
      expect(screen.getByText('Not allowed')).toBeInTheDocument()
    })
  })

  describe('Multi-segment flights', () => {
    it('displays connecting flight information for multi-segment flights', () => {
      const multiSegmentItinerary = mockFlightResponse.data.itineraries[1] // This has 2 segments

      render(<FlightCard {...defaultProps} itinerary={multiSegmentItinerary} />)

      const expandButton = screen.getByRole('button', {
        name: /flight details/i,
      })
      fireEvent.click(expandButton)

      expect(screen.getByText('1 stop')).toBeInTheDocument()
      expect(screen.getAllByText('American Airlines').length).toBeGreaterThan(0)
    })
  })

  describe('Time formatting', () => {
    it('formats time correctly in 24-hour format', () => {
      render(<FlightCard {...defaultProps} />)

      const timeElements = screen.getAllByText(/^\d{2}:\d{2}$/)
      expect(timeElements.length).toBeGreaterThan(0)
    })
  })

  describe('Duration formatting', () => {
    it('formats duration correctly', () => {
      render(<FlightCard {...defaultProps} />)

      expect(screen.getByText('12h 0m')).toBeInTheDocument()
    })

    it('handles duration with minutes correctly', () => {
      const customItinerary = {
        ...mockItinerary,
        legs: [
          {
            ...mockItinerary.legs[0],
            durationInMinutes: 135, // 2h 15m
          },
        ],
      }

      render(<FlightCard {...defaultProps} itinerary={customItinerary} />)

      expect(screen.getByText('2h 15m')).toBeInTheDocument()
    })
  })

  describe('Stop count display', () => {
    it('displays "Nonstop" for direct flights', () => {
      render(<FlightCard {...defaultProps} />)

      expect(screen.getByText('Nonstop')).toBeInTheDocument()
    })

    it('displays "1 stop" for one-stop flights', () => {
      const oneStopItinerary = {
        ...mockItinerary,
        legs: [
          {
            ...mockItinerary.legs[0],
            stopCount: 1,
          },
        ],
      }

      render(<FlightCard {...defaultProps} itinerary={oneStopItinerary} />)

      expect(screen.getByText('1 stop')).toBeInTheDocument()
    })

    it('displays multiple stops correctly', () => {
      const multiStopItinerary = {
        ...mockItinerary,
        legs: [
          {
            ...mockItinerary.legs[0],
            stopCount: 2,
          },
        ],
      }

      render(<FlightCard {...defaultProps} itinerary={multiStopItinerary} />)

      expect(screen.getByText('2 stops')).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('has proper button roles', () => {
      render(<FlightCard {...defaultProps} />)

      const buttons = screen.getAllByRole('button')
      expect(buttons.length).toBeGreaterThan(0)
    })

    it('has proper image alt text', () => {
      render(<FlightCard {...defaultProps} />)

      const airlineLogo = screen.getByAltText('LATAM Airlines')
      expect(airlineLogo).toBeInTheDocument()
    })
  })

  describe('Error handling', () => {
    it('handles missing airline logo gracefully', () => {
      const itineraryWithoutLogo = {
        ...mockItinerary,
        legs: [
          {
            ...mockItinerary.legs[0],
            carriers: {
              ...mockItinerary.legs[0].carriers,
              marketing: [
                {
                  ...mockItinerary.legs[0].carriers.marketing[0],
                  logoUrl: '',
                },
              ],
            },
          },
        ],
      }

      expect(() => {
        render(
          <FlightCard {...defaultProps} itinerary={itineraryWithoutLogo} />,
        )
      }).not.toThrow()
    })

    it('handles null origin and destination', () => {
      expect(() => {
        render(
          <FlightCard {...defaultProps} origin={null} destination={null} />,
        )
      }).not.toThrow()
    })
  })
})
