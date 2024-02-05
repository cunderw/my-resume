import { getDownloadURL, ref } from 'firebase/storage'
import React, { useEffect, useState } from 'react'
import { FaFilePdf } from 'react-icons/fa'

import TextContent from '../../../components/BodyText'
import Heading from '../../../components/Heading'
import { storage } from '../../../lib/Firebase'
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
  skills,
  pdfStorageLoc
}) => {
  const [resumeLink, setResumeLink] = useState('')

  useEffect(() => {
    const fetchResumeLink = async () => {
      const storageRef = ref(storage, pdfStorageLoc)
      const url = await getDownloadURL(storageRef)
      setResumeLink(url)
    }
    fetchResumeLink()
  }, [pdfStorageLoc])

  return (
    <div className="mx-auto max-w-4xl p-8">
      <div className="flex items-center justify-between">
        <Heading text={name} level="h1" />
        {resumeLink && (
          <div className="mb-2">
            <a
              href={resumeLink}
              className="flex items-center justify-start space-x-2 hover:text-blue-600"
            >
              <FaFilePdf />
              <span className="ml-2">Download Resume</span>
            </a>
          </div>
        )}
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
