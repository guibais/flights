import '@testing-library/jest-dom'
import React from 'react'

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
  ChevronDown: () => React.createElement('div', { 'data-testid': 'chevron-down' }),
  ChevronUp: () => React.createElement('div', { 'data-testid': 'chevron-up' }),
  Plane: () => React.createElement('div', { 'data-testid': 'plane-icon' }),
}))
