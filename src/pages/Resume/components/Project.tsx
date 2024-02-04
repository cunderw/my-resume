import React from 'react'

import BodyText from '../../../components/BodyText'
import Heading from '../../../components/Heading'
import List from '../../../components/List'
import { ProjectModel } from '../../../models/Resume'

const Project: React.FC<ProjectModel> = ({ name, description, duties }) => {
  return (
    <div className="mb-6">
      <Heading level="h4" text={name} />
      <BodyText text={description} mb={2} />
      <List items={duties} />
    </div>
  )
}

export default Project
