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
  otherRoles,
  duties
}) => {
  return (
    <div className="mb-8">
      <Heading text={`${title} - ${company}`} level="h2" />
      <BodyText text={`${location} | ${from} - ${to}`} mb={2} />
      <BodyText text={description} mb={2} />
      {otherRoles && (
        <>
          <Heading text="Other Roles" level="h2" />
          <List items={otherRoles} />
        </>
      )}

      {duties && (
        <>
          <Heading text="Duties and Responsibilities" level="h2" />
          <List items={duties} />
        </>
      )}
      {projects?.map((project, index) => (
        <Project key={index} {...project} />
      ))}
      <hr className="mt-4" />
    </div>
  )
}

export default Experience
