import React, { useEffect, useState } from 'react'

import ContentWrapper from '../../components/ContentWrapper'
import { getResume } from '../../data/Resume'
import { ResumeModel } from '../../models/Resume'
import Resume from './components/Resume'

const ResumePage: React.FC = () => {
  const [resumeData, setResumeData] = useState<ResumeModel | null>(null)

  useEffect(() => {
    const fetchResumeData = async () => {
      const data = await getResume()
      setResumeData(data)
    }

    fetchResumeData()
  }, []) // The empty array ensures this effect runs only once when the component mounts

  return (
    <ContentWrapper>
      {resumeData ? <Resume {...resumeData} /> : <div>Loading...</div>}
    </ContentWrapper>
  )
}

export default ResumePage
