import React from 'react'

type ListProps = {
  items: string[]
}

const List: React.FC<ListProps> = ({ items }) => {
  return (
    <ul className="mb-4 list-inside list-disc text-sm">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}

export default List
