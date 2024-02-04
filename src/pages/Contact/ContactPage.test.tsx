import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import ContactPage from './ContactPage'

describe('ContactPage Component', () => {
  test('renders the ContactPage with heading and contact links', () => {
    render(<ContactPage />)

    // Check for the heading
    const heading = screen.getByRole('heading', { name: 'Contact' })
    expect(heading).toBeInTheDocument()

    // Check for email link and text
    const emailLink = screen.getByText('cunderw@gmail.com').closest('a')
    expect(emailLink).toHaveAttribute('href', 'mailto:your-email@example.com')

    // Check for LinkedIn link and text
    const linkedInLink = screen.getByText('LinkedIn/cunderw').closest('a')
    expect(linkedInLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/cunderw/'
    )

    // Check for GitHub link and text
    const gitHubLink = screen.getByText('GitHub/cunderw').closest('a')
    expect(gitHubLink).toHaveAttribute('href', 'https://github.com/cunderw')

    // Check for phone link and text
    const phoneLink = screen.getByText('+1 (417) 379-8016').closest('a')
    expect(phoneLink).toHaveAttribute('href', 'tel:+14173798016')
  })
})
