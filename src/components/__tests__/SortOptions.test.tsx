import { fireEvent, render, screen } from '@testing-library/react'
import { SortOptions } from '../SortOptions'
import type { SortOption } from '../../types/flight.types'

describe('SortOptions', () => {
  const mockOnSortChange = jest.fn()
  
  const defaultProps = {
    sortBy: 'best' as SortOption,
    onSortChange: mockOnSortChange,
    resultsCount: 10,
  }

  beforeEach(() => {
    mockOnSortChange.mockClear()
  })

  it('renders all sort options correctly', () => {
    render(<SortOptions {...defaultProps} />)
    
    expect(screen.getByText('Sort by:')).toBeInTheDocument()
    expect(screen.getByText('Best')).toBeInTheDocument()
    expect(screen.getByText('Cheapest')).toBeInTheDocument()
    expect(screen.getByText('Fastest')).toBeInTheDocument()
  })

  it('displays the correct results count', () => {
    render(<SortOptions {...defaultProps} resultsCount={25} />)
    
    expect(screen.getByText('25 results')).toBeInTheDocument()
  })

  it('highlights the currently selected sort option', () => {
    render(<SortOptions {...defaultProps} sortBy="cheapest" />)
    
    const bestButton = screen.getByText('Best')
    const cheapestButton = screen.getByText('Cheapest')
    const fastestButton = screen.getByText('Fastest')
    
    expect(bestButton).toHaveClass('bg-gray-700', 'text-gray-300')
    expect(cheapestButton).toHaveClass('bg-blue-600', 'text-white')
    expect(fastestButton).toHaveClass('bg-gray-700', 'text-gray-300')
  })

  it('calls onSortChange when a different sort option is clicked', () => {
    render(<SortOptions {...defaultProps} sortBy="best" />)
    
    const cheapestButton = screen.getByText('Cheapest')
    fireEvent.click(cheapestButton)
    
    expect(mockOnSortChange).toHaveBeenCalledWith('cheapest')
    expect(mockOnSortChange).toHaveBeenCalledTimes(1)
  })

  it('calls onSortChange when the same sort option is clicked', () => {
    render(<SortOptions {...defaultProps} sortBy="best" />)
    
    const bestButton = screen.getByText('Best')
    fireEvent.click(bestButton)
    
    expect(mockOnSortChange).toHaveBeenCalledWith('best')
    expect(mockOnSortChange).toHaveBeenCalledTimes(1)
  })

  it('displays correct tooltips for each sort option', () => {
    render(<SortOptions {...defaultProps} />)
    
    const bestButton = screen.getByText('Best')
    const cheapestButton = screen.getByText('Cheapest')
    const fastestButton = screen.getByText('Fastest')
    
    expect(bestButton).toHaveAttribute('title', 'Best overall value')
    expect(cheapestButton).toHaveAttribute('title', 'Lowest price')
    expect(fastestButton).toHaveAttribute('title', 'Shortest duration')
  })

  it('applies hover styles correctly', () => {
    render(<SortOptions {...defaultProps} sortBy="best" />)
    
    const cheapestButton = screen.getByText('Cheapest')
    
    expect(cheapestButton).toHaveClass('hover:bg-gray-600')
  })

  it('handles zero results count', () => {
    render(<SortOptions {...defaultProps} resultsCount={0} />)
    
    expect(screen.getByText('0 results')).toBeInTheDocument()
  })

  it('handles large results count', () => {
    render(<SortOptions {...defaultProps} resultsCount={9999} />)
    
    expect(screen.getByText('9999 results')).toBeInTheDocument()
  })

  it('renders with correct accessibility attributes', () => {
    render(<SortOptions {...defaultProps} />)
    
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(3)
    
    buttons.forEach(button => {
      expect(button).toHaveAttribute('title')
    })
  })

  it('maintains proper component structure', () => {
    const { container } = render(<SortOptions {...defaultProps} />)
    
    const mainContainer = container.firstChild
    expect(mainContainer).toHaveClass('bg-gray-800', 'rounded-lg', 'p-4', 'mb-6')
    
    const flexContainer = mainContainer?.firstChild
    expect(flexContainer).toHaveClass('flex', 'items-center', 'justify-between')
  })

  describe('sort option interactions', () => {
    it('switches from best to cheapest', () => {
      render(<SortOptions {...defaultProps} sortBy="best" />)
      
      fireEvent.click(screen.getByText('Cheapest'))
      
      expect(mockOnSortChange).toHaveBeenCalledWith('cheapest')
    })

    it('switches from cheapest to fastest', () => {
      render(<SortOptions {...defaultProps} sortBy="cheapest" />)
      
      fireEvent.click(screen.getByText('Fastest'))
      
      expect(mockOnSortChange).toHaveBeenCalledWith('fastest')
    })

    it('switches from fastest to best', () => {
      render(<SortOptions {...defaultProps} sortBy="fastest" />)
      
      fireEvent.click(screen.getByText('Best'))
      
      expect(mockOnSortChange).toHaveBeenCalledWith('best')
    })
  })

  describe('visual states', () => {
    it('shows active state for best option', () => {
      render(<SortOptions {...defaultProps} sortBy="best" />)
      
      const bestButton = screen.getByText('Best')
      expect(bestButton).toHaveClass('bg-blue-600', 'text-white')
    })

    it('shows inactive state for non-selected options', () => {
      render(<SortOptions {...defaultProps} sortBy="best" />)
      
      const cheapestButton = screen.getByText('Cheapest')
      const fastestButton = screen.getByText('Fastest')
      
      expect(cheapestButton).toHaveClass('bg-gray-700', 'text-gray-300')
      expect(fastestButton).toHaveClass('bg-gray-700', 'text-gray-300')
    })
  })
})
