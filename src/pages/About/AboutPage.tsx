import React from 'react'

import imagePath from '../../assets/images/profile.png'
import BodyText from '../../components/BodyText'
import ContentWrapper from '../../components/ContentWrapper'
import Heading from '../../components/Heading'
import Picture from '../../components/Picture'
import { useResume } from '../../contexts/ResumeContext'

const AboutPage: React.FC = () => {
  const { resumeData, isResumeDataLoading } = useResume()
  return (
    <ContentWrapper>
      {!resumeData || isResumeDataLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="md:col-span-1">
            <Picture src={imagePath} alt="Carson Underwood" />
          </div>
          <div className="flex flex-col space-y-4 md:col-span-1">
            <Heading text="About Me" />
            <BodyText text={resumeData.aboutMe} />
          </div>
        </div>
      )}
    </ContentWrapper>
  )
}

export default AboutPage
