import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import Picture from './Picture'

describe('Picture Component', () => {
  const testSrc = 'test-image.jpg'
  const testAlt = 'Test Image'

  test('renders an image with the correct src and alt attributes', () => {
    render(<Picture src={testSrc} alt={testAlt} />)

    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('src', testSrc)
    expect(image).toHaveAttribute('alt', testAlt)
  })

  test('renders with specified class names', () => {
    render(<Picture src={testSrc} alt={testAlt} />)

    const image = screen.getByRole('img')
    expect(image).toHaveClass('size-48', 'rounded-full', 'object-cover')
  })
})
