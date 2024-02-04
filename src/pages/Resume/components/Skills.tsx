import React from 'react'

import Heading from '../../../components/Heading'
import List from '../../../components/List'

const Skills: React.FC<{ skills: string[] }> = ({ skills }) => {
  return (
    <div className="mb-6">
      <Heading text="Skills" />
      <List items={skills} />
    </div>
  )
}

export default Skills
