import React from 'react'

type HeadingProps = {
  text: string
  level?: 'h1' | 'h2' | 'h3' | 'h4'
}

const Heading: React.FC<HeadingProps> = ({ text, level = 'h3' }) => {
  const Component = level
  const textStyle = {
    h1: 'text-xl font-bold',
    h2: 'text-l font-bold',
    h3: 'text-l',
    h4: 'text-md'
  }
  return <Component className={`mb-2 ${textStyle[level]}`}>{text}</Component>
}

export default Heading
