import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import AboutPage from './AboutPage'

describe('AboutPage Component', () => {
  test('renders the AboutPage component with a picture, heading, and body text', () => {
    render(<AboutPage />)

    // Check for Picture component by alt text
    const profilePicture = screen.getByAltText('Carson Underwood')
    expect(profilePicture).toBeInTheDocument()

    // Check for Heading component by text content
    const heading = screen.getByText('About Me')
    expect(heading).toBeInTheDocument()

    // Check for BodyText component by partial text content
    const bodyTextContent =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    const bodyText = screen.getByText(new RegExp(bodyTextContent, 'i'))
    expect(bodyText).toBeInTheDocument()
  })
})
