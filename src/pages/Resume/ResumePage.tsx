import React from 'react'

import ContentWrapper from '../../components/ContentWrapper'
import { useResume } from '../../contexts/ResumeContext'
import Resume from './components/Resume'

const ResumePage: React.FC = () => {
  const { resumeData, isResumeDataLoading } = useResume()
  return (
    <ContentWrapper>
      {!resumeData || isResumeDataLoading ? (
        <div>Loading...</div>
      ) : (
        <Resume {...resumeData} />
      )}
    </ContentWrapper>
  )
}

export default ResumePage
