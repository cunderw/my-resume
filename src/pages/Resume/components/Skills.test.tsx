import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import Skills from './Skills'

describe('Skills Component', () => {
  const skillsList = ['JavaScript', 'React', 'Node.js']

  test('renders Skills heading and list of skills', () => {
    render(<Skills skills={skillsList} />)
    skillsList.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument()
    })
  })
})
