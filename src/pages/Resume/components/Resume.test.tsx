import '@testing-library/jest-dom'

import { render, screen, waitFor } from '@testing-library/react'

import { ResumeModel } from '../../../models/Resume'
import Resume from './Resume'

describe('Resume Component', () => {
  const mockProps: ResumeModel = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Anytown, AN 12345',
    summary: 'Experienced software engineer...',
    experience: [
      {
        title: 'Senior Developer',
        company: 'Tech Corp',
        location: 'Tech City',
        from: 'Jan 2019',
        to: 'Present',
        description: 'Developed amazing features...',
        projects: [],
        duties: []
      }
    ],
    education: [
      {
        institution: 'Tech University',
        location: 'Tech Town',
        year: '2018',
        description: 'Bachelor of Science in Computer Science'
      }
    ],
    skills: ['JavaScript', 'React', 'Node.js'],
    linkedinProfile: '',
    githubProfile: '',
    aboutMe: '',
    pdfStorageLoc: 'test.pdf'
  }

  test('renders the Resume component with provided information', async () => {
    render(<Resume {...mockProps} />)

    await waitFor(() => {
      expect(screen.getByText('Download Resume')).toBeInTheDocument()
    })

    expect(
      screen.getByRole('heading', { name: mockProps.name })
    ).toBeInTheDocument()
    expect(screen.getByText(mockProps.email)).toBeInTheDocument()
    expect(screen.getByText(mockProps.phone)).toBeInTheDocument()
    expect(screen.getByText(mockProps.address)).toBeInTheDocument()
    expect(screen.getByText(mockProps.summary)).toBeInTheDocument()

    mockProps.experience.forEach((exp) => {
      expect(screen.getByText(exp.description)).toBeInTheDocument()
    })

    mockProps.education.forEach((edu) => {
      expect(screen.getByText(edu.institution)).toBeInTheDocument()
    })

    mockProps.skills.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument()
    })
  })
})
