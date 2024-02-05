import React from 'react'

import List from '../../../components/List'

const Skills: React.FC<{ skills: string[] }> = ({ skills }) => {
  return (
    <div className="mb-6">
      <List items={skills} />
    </div>
  )
}

export default Skills
