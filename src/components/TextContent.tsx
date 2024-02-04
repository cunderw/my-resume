import React from 'react'

type ContentProps = {
  text: string
}

const Content: React.FC<ContentProps> = ({ text }) => {
  return <p className="mb-4 text-center text-base">{text}</p>
}

export default Content
