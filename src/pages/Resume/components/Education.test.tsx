import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import Education from './Education'

describe('Education Component', () => {
  const mockProps = {
    institution: 'Test University',
    location: 'Test City',
    year: '2021',
    description: 'Test Description'
  }

  test('renders institution name as a heading', () => {
    render(<Education {...mockProps} />)
    const headingElement = screen.getByRole('heading', {
      name: mockProps.institution
    })
    expect(headingElement).toBeInTheDocument()
  })

  test('renders location and year information', () => {
    render(<Education {...mockProps} />)
    const locationYearText = `${mockProps.location} | ${mockProps.year}`
    expect(screen.getByText(locationYearText)).toBeInTheDocument()
  })

  test('renders the education description', () => {
    render(<Education {...mockProps} />)
    expect(screen.getByText(mockProps.description)).toBeInTheDocument()
  })
})
