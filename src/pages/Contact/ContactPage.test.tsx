// ContactPage.test.tsx

import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import * as ResumeContextModule from '../../contexts/ResumeContext' // Adjust the import path as needed
import { ResumeModel } from '../../models/Resume'
import ContactPage from './ContactPage'

// Mock data for the resume
const mockResumeData = {
  email: 'example@example.com',
  linkedinProfile: 'example-linkedin',
  githubProfile: 'example-github',
  phone: '123-456-7890'
}

// Mock the useResume hook before each test
beforeEach(() => {
  jest.spyOn(ResumeContextModule, 'useResume').mockReturnValue({
    resumeData: mockResumeData as ResumeModel,
    isResumeDataLoading: false,
    resumeError: null
  })
})

// Reset all mocks after each test
afterEach(() => {
  jest.resetAllMocks()
})

describe('ContactPage Component', () => {
  test('displays loading indicator when data is loading', () => {
    jest.spyOn(ResumeContextModule, 'useResume').mockReturnValue({
      resumeData: undefined,
      isResumeDataLoading: true,
      resumeError: null
    })

    render(<ContactPage />)
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument()
  })

  test('displays contact information when data is loaded', () => {
    render(<ContactPage />)

    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByText(mockResumeData.email)).toBeInTheDocument()
    expect(
      screen.getByText(`LinkedIn/${mockResumeData.linkedinProfile}`)
    ).toBeInTheDocument()
    expect(
      screen.getByText(`Github/${mockResumeData.githubProfile}`)
    ).toBeInTheDocument()
    expect(screen.getByText(mockResumeData.phone)).toBeInTheDocument()

    expect(screen.getByText(mockResumeData.email).closest('a')).toHaveAttribute(
      'href',
      `mailto:${mockResumeData.email}`
    )
    expect(
      screen
        .getByText(`LinkedIn/${mockResumeData.linkedinProfile}`)
        .closest('a')
    ).toHaveAttribute(
      'href',
      `https://www.linkedin.com/in/${mockResumeData.linkedinProfile}/`
    )
    expect(
      screen.getByText(`Github/${mockResumeData.githubProfile}`).closest('a')
    ).toHaveAttribute(
      'href',
      `https://github.com/${mockResumeData.githubProfile}`
    )
    expect(screen.getByText(mockResumeData.phone).closest('a')).toHaveAttribute(
      'href',
      `tel:+${mockResumeData.phone}`
    )
  })
})
