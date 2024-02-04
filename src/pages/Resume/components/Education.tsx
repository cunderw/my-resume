import React from 'react'

import BodyText from '../../../components/BodyText'
import Heading from '../../../components/Heading'
import { EducationModel } from '../../../models/Resume'

const Education: React.FC<EducationModel> = ({
  institution,
  location,
  year,
  description
}) => {
  return (
    <div className="mb-6">
      <Heading text={institution} />
      <BodyText text={`${location} | ${year}`} mb={2} />
      <BodyText text={description} />
    </div>
  )
}

export default Education
