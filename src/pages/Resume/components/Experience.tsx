import React from 'react'

import BodyText from '../../../components/BodyText'
import Heading from '../../../components/Heading'
import List from '../../../components/List'
import { ExperienceModel } from '../../../models/Resume'
import Project from './Project'

const Experience: React.FC<ExperienceModel> = ({
  title,
  company,
  location,
  from,
  to,
  description,
  projects,
  duties
}) => {
  return (
    <div className="mb-8">
      <Heading text={`${title} - ${company}`} />
      <BodyText text={`${location} | ${from} - ${to}`} mb={2} />
      <BodyText text={description} mb={4} />
      {duties && <List items={duties} />}
      {projects?.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  )
}

export default Experience
