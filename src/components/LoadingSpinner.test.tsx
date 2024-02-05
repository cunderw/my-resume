import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import LoadingSpinner from './LoadingSpinner'

describe('LoadingSpinner', () => {
  it('renders', () => {
    render(<LoadingSpinner />)
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument()
  })
})
