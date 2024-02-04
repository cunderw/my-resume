import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import Navbar from './Navbar' // Adjust the import path as needed

describe('Navbar Component', () => {
  test('renders Navbar links', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )

    const aboutLink = screen.getByText('About')
    const resumeLink = screen.getByText('Resume')
    const contactLink = screen.getByText('Contact')

    expect(aboutLink).toBeInTheDocument()
    expect(resumeLink).toBeInTheDocument()
    expect(contactLink).toBeInTheDocument()

    // Optionally, you can also test if the links point to the correct paths
    expect(aboutLink).toHaveAttribute('href', '/about')
    expect(resumeLink).toHaveAttribute('href', '/resume')
    expect(contactLink).toHaveAttribute('href', '/contact')
  })
})
