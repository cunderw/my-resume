import React from 'react'

type TitleProps = {
  text: string
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return <h1 className="mb-4 text-center text-3xl font-bold">{text}</h1>
}

export default Title
