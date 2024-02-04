import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import Project from './Project'

describe('Project Component', () => {
  const mockProps = {
    name: 'Project Alpha',
    description: 'This is a project description.',
    duties: ['Duty 1', 'Duty 2', 'Duty 3']
  }

  test('renders Project component with provided information', () => {
    render(<Project {...mockProps} />)

    expect(
      screen.getByRole('heading', { name: mockProps.name })
    ).toBeInTheDocument()
    expect(screen.getByText(mockProps.description)).toBeInTheDocument()
    mockProps.duties.forEach((duty) => {
      expect(screen.getByText(duty)).toBeInTheDocument()
    })
  })
})
