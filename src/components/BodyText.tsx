import React from 'react'

type BodyTextProps = {
  text: string
  mb?: number
}

const BodyText: React.FC<BodyTextProps> = ({ text, mb = 2 }) => {
  // eslint-disable-next-line tailwindcss/no-custom-classname
  return <p className={`mb-${mb} text-sm`}>{text}</p>
}

export default BodyText
