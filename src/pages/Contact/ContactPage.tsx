import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa'

import ContentWrapper from '../../components/ContentWrapper'
import Heading from '../../components/Heading'
import LoadingSpinner from '../../components/LoadingSpinner'
import { useResume } from '../../contexts/ResumeContext'

const ContactPage = () => {
  const { resumeData, isResumeDataLoading } = useResume()
  return (
    <ContentWrapper>
      {!resumeData || isResumeDataLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Heading text="Contact" level="h1" />
          <div className="space-y-3">
            <div>
              <a
                href={`mailto:${resumeData.email}`}
                className="flex items-center justify-start space-x-2 hover:text-blue-600"
              >
                <FaEnvelope />
                <span>{resumeData.email}</span>
              </a>
            </div>
            <div>
              <a
                href={`tel:+${resumeData.phone}`}
                className="flex items-center justify-start space-x-2 hover:text-blue-600"
              >
                <FaPhone />
                <span>{resumeData.phone}</span>
              </a>
            </div>
            <div>
              <a
                href={`https://www.linkedin.com/in/${resumeData.linkedinProfile}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-start space-x-2 hover:text-blue-600"
              >
                <FaLinkedin />
                <span>{`LinkedIn/${resumeData.linkedinProfile}`}</span>
              </a>
            </div>
            <div>
              <a
                href={`https://github.com/${resumeData.githubProfile}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-start space-x-2 hover:text-blue-600"
              >
                <FaGithub />
                <span>{`Github/${resumeData.githubProfile}`}</span>
              </a>
            </div>
          </div>
        </>
      )}
    </ContentWrapper>
  )
}

export default ContactPage
