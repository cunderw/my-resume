import React from 'react'

import TextContent from '../../../components/BodyText'
import Heading from '../../../components/Heading'
import { ResumeModel } from '../../../models/Resume'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'

const Resume: React.FC<ResumeModel> = ({
  name,
  email,
  phone,
  address,
  summary,
  experience,
  education,
  skills
}) => {
  return (
    <div className="mx-auto max-w-4xl p-8">
      <div className="flex ">
        <Heading text={name} level="h1" />
      </div>
      <div className="mb-4 flex items-center space-x-3">
        <TextContent text={email} />
        <TextContent text="|" />
        <TextContent text={phone} />
        <TextContent text="|" />
        <TextContent text={address} />
      </div>
      <TextContent text={summary} mb={4} />
      <div>
        <Heading text="Experience" level="h1" />
        {experience.map((exp, index) => (
          <Experience key={index} {...exp} />
        ))}
        <Heading text="Education" level="h1" />
        {education.map((edu, index) => (
          <Education key={index} {...edu} />
        ))}
        <Heading text="Skills" level="h1" />
        <Skills skills={skills} />
      </div>
    </div>
  )
}

export default Resume
