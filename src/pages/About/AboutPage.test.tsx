import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import * as ResumeContextModule from '../../contexts/ResumeContext'
import { ResumeModel } from '../../models/Resume'
import AboutPage from './AboutPage'

const mockResumeData = {
  aboutMe: 'Test About Me Text'
}

beforeEach(() => {
  jest.spyOn(ResumeContextModule, 'useResume').mockReturnValue({
    resumeData: mockResumeData as ResumeModel,
    isResumeDataLoading: false,
    resumeError: null
  })
})

afterEach(() => {
  jest.resetAllMocks()
})

describe('AboutPage Component', () => {
  test('displays loading indicator when data is loading', () => {
    jest.spyOn(ResumeContextModule, 'useResume').mockReturnValue({
      resumeData: undefined,
      isResumeDataLoading: true,
      resumeError: null
    })

    render(<AboutPage />)
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  test('displays about me section when data is loaded', () => {
    render(<AboutPage />)
    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(screen.getByText(mockResumeData.aboutMe)).toBeInTheDocument()
  })
})
