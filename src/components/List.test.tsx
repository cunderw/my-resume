import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import List from './List'

describe('List Component', () => {
  test('renders a list of items', () => {
    const testItems = ['Item 1', 'Item 2', 'Item 3']
    render(<List items={testItems} />)

    testItems.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument()
    })
  })

  test('renders the correct number of list items', () => {
    const testItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4']
    render(<List items={testItems} />)

    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(testItems.length)
  })
})
