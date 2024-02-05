import '@testing-library/jest-dom'

import { useQuery } from '@tanstack/react-query'
import { render, screen } from '@testing-library/react'
import React from 'react'

import { ResumeProvider, useResume } from './ResumeContext' // Adjust the import path as needed

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn()
}))

const TestComponent: React.FC = () => {
  const { resumeData, isResumeDataLoading, resumeError } = useResume()
  if (isResumeDataLoading) return <div>Loading...</div>
  if (resumeError) return <div>Error: {resumeError.message}</div>
  return <div>{resumeData?.name}</div>
}

describe('ResumeContext', () => {
  test('displays loading state', () => {
    ;(useQuery as jest.Mock).mockReturnValue({
      data: undefined,
      isLoading: true,
      error: null
    })

    render(
      <ResumeProvider>
        <TestComponent />
      </ResumeProvider>
    )

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  test('displays resume data upon successful fetch', () => {
    const mockResumeData = { name: 'John Doe' } // Adapt based on your ResumeModel
    ;(useQuery as jest.Mock).mockReturnValue({
      data: mockResumeData,
      isLoading: false,
      error: null
    })

    render(
      <ResumeProvider>
        <TestComponent />
      </ResumeProvider>
    )

    expect(screen.getByText(mockResumeData.name)).toBeInTheDocument()
  })

  test('displays error message on fetch failure', () => {
    const mockError = new Error('Failed to fetch')
    ;(useQuery as jest.Mock).mockReturnValue({
      data: undefined,
      isLoading: false,
      error: mockError
    })

    render(
      <ResumeProvider>
        <TestComponent />
      </ResumeProvider>
    )

    expect(screen.getByText(`Error: ${mockError.message}`)).toBeInTheDocument()
  })
})
