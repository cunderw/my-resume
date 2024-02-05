// ResumePage.test.tsx

import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import * as ResumeContextModule from '../../contexts/ResumeContext'
import { ResumeModel } from '../../models/Resume'
import ResumePage from './ResumePage'

const mockResumeData: ResumeModel = {
  education: [],
  experience: [],
  skills: [],
  aboutMe: 'Test About Me Text',
  name: 'Testy McTesterson',
  email: 'test@test.com',
  phone: '5555555',
  address: '123 Test St',
  linkedinProfile: 'testy-linkedin',
  githubProfile: 'testy-github',
  summary: '',
  pdfStorageLoc: 'test.pdf'
}

beforeEach(() => {
  jest.spyOn(ResumeContextModule, 'useResume').mockReturnValue({
    resumeData: mockResumeData,
    isResumeDataLoading: false,
    resumeError: null
  })
})

afterEach(() => {
  jest.resetAllMocks()
})

describe('ResumePage Component', () => {
  test('displays loading indicator when data is loading', () => {
    jest.spyOn(ResumeContextModule, 'useResume').mockReturnValue({
      resumeData: undefined,
      isResumeDataLoading: true,
      resumeError: null
    })

    render(<ResumePage />)
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument()
  })

  test('renders Resume component when data is loaded', async () => {
    render(<ResumePage />)

    expect(screen.getByText(mockResumeData.name)).toBeInTheDocument()
  })
})
