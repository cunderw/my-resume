import React from 'react'

import ContentWrapper from '../../components/ContentWrapper'
import LoadingSpinner from '../../components/LoadingSpinner'
import { useResume } from '../../contexts/ResumeContext'
import Resume from './components/Resume'

const ResumePage: React.FC = () => {
  const { resumeData, isResumeDataLoading } = useResume()
  return (
    <ContentWrapper>
      {!resumeData || isResumeDataLoading ? (
        <LoadingSpinner />
      ) : (
        <Resume {...resumeData} />
      )}
    </ContentWrapper>
  )
}

export default ResumePage
