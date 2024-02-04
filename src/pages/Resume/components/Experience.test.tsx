import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import Experience from './Experience'

describe('Experience Component', () => {
  const mockProps = {
    title: 'Senior Developer',
    company: 'Tech Company',
    location: 'Tech City',
    from: 'Jan 2020',
    to: 'Present',
    description: 'Developed amazing features',
    otherRoles: ['Team Lead', 'Mentor'],
    duties: ['Code Review', 'Development'],
    projects: [
      {
        name: 'Project A',
        description: 'Description A',
        duties: ['Duty A1', 'Duty A2']
      },
      {
        name: 'Project B',
        description: 'Description B',
        duties: ['Duty B1', 'Duty B2']
      }
    ]
  }

  test('renders Experience component with provided information', () => {
    render(<Experience {...mockProps} />)

    expect(
      screen.getByRole('heading', {
        name: `${mockProps.title} - ${mockProps.company}`
      })
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        `${mockProps.location} | ${mockProps.from} - ${mockProps.to}`
      )
    ).toBeInTheDocument()
    expect(screen.getByText(mockProps.description)).toBeInTheDocument()
    mockProps.otherRoles.forEach((role) => {
      expect(screen.getByText(role)).toBeInTheDocument()
    })
    mockProps.duties.forEach((duty) => {
      expect(screen.getByText(duty)).toBeInTheDocument()
    })
    mockProps.projects.forEach((project) => {
      expect(screen.getByText(project.name)).toBeInTheDocument()
      expect(screen.getByText(project.description)).toBeInTheDocument()
      project.duties.forEach((duty) => {
        expect(screen.getByText(duty)).toBeInTheDocument()
      })
    })
  })
})
