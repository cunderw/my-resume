import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import ContentWrapper from './ContentWrapper'

describe('ContentWrapper', () => {
  test('renders the children passed as a prop', () => {
    const testText = 'Test Body Text'
    render(<ContentWrapper>{testText}</ContentWrapper>)

    expect(screen.getByText(testText)).toBeInTheDocument()
  })
})
