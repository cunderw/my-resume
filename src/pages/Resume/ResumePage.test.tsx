import '@testing-library/jest-dom'

import { render, screen, waitFor } from '@testing-library/react'

import * as ResumeData from '../../data/Resume'
import ResumePage from './ResumePage'

const mockResumeData = {
  ...ResumeData.dummyResume
}

beforeEach(() => {
  jest.spyOn(ResumeData, 'getResume').mockResolvedValue(mockResumeData)
})

describe('ResumePage Component', () => {
  test('shows loading initially and then loads and displays resume data', async () => {
    render(<ResumePage />)

    // Check for loading state
    expect(screen.getByText('Loading...')).toBeInTheDocument()

    // Wait for loading to finish and component to update
    await waitFor(() => {
      // Now that the promise is resolved, we check the assertions within this waitFor block
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
      expect(screen.getByText(mockResumeData.name)).toBeInTheDocument()
    })
  })
})
