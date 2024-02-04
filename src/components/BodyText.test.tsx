import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import BodyText from './BodyText'

describe('BodyText', () => {
  test('renders the text passed as a prop', () => {
    const testText = 'Test Body Text'
    render(<BodyText text={testText} />)

    expect(screen.getByText(testText)).toBeInTheDocument()
  })

  test('applies default margin-bottom class', () => {
    const testText = 'Test Body Text'
    render(<BodyText text={testText} />)

    const paragraph = screen.getByText(testText)
    expect(paragraph).toHaveClass('mb-2')
  })

  test('applies custom margin-bottom class when mb prop is provided', () => {
    const testText = 'Test Body Text'
    const customMargin = 4
    render(<BodyText text={testText} mb={customMargin} />)

    const paragraph = screen.getByText(testText)
    expect(paragraph).toHaveClass(`mb-${customMargin}`)
  })
})
