import React from 'react'

type HeadingProps = {
  text: string
  level?: 'h1' | 'h2' | 'h3' | 'h4'
}

const Heading: React.FC<HeadingProps> = ({ text, level = 'h3' }) => {
  const Component = level
  return <Component className="mb-2 text-xl font-bold">{text}</Component>
}

export default Heading
