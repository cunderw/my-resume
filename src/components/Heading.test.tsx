import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import Heading from './Heading'

describe('Heading', () => {
  test('renders the text passed as a prop', () => {
    const testText = 'Test Heading'
    render(<Heading text={testText} />)

    expect(screen.getByText(testText)).toBeInTheDocument()
  })

  test('applies default margin-bottom class', () => {
    const testText = 'Test Heading'
    render(<Heading text={testText} />)

    const heading = screen.getByText(testText)
    expect(heading).toHaveClass('mb-2 text-l')
  })

  test('applies custom margin-bottom class when mb prop is provided', () => {
    const testText = 'Test Heading'
    const customMargin = 'h1'
    render(<Heading text={testText} level={customMargin} />)

    const heading = screen.getByText(testText)
    expect(heading).toHaveClass('text-xl font-bold')
  })
})
