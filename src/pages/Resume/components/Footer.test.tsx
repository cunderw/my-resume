import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import Footer from './Footer'

describe('Footer Component', () => {
  test('renders the Footer component', () => {
    render(<Footer />)
    expect(
      screen.getByText('View the code for this site on GitHub')
    ).toBeInTheDocument()
  })
})
