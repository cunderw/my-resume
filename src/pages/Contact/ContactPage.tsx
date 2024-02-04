import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa'

import ContentWrapper from '../../components/ContentWrapper'
import Heading from '../../components/Heading'

const ContactPage = () => {
  return (
    <ContentWrapper>
      <Heading text="Contact" level="h1" />
      <div className="space-y-3">
        <div>
          <a
            href="mailto:your-email@example.com"
            className="flex items-center justify-center space-x-2 hover:text-blue-600"
          >
            <FaEnvelope />
            <span>cunderw@gmail.com</span>
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/cunderw/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 hover:text-blue-600"
          >
            <FaLinkedin />
            <span>LinkedIn/cunderw</span>
          </a>
        </div>
        <div>
          <a
            href="https://github.com/cunderw"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 hover:text-blue-600"
          >
            <FaGithub />
            <span>GitHub/cunderw</span>
          </a>
        </div>
        <div>
          <a
            href="tel:+14173798016"
            className="flex items-center justify-center space-x-2 hover:text-blue-600"
          >
            <FaPhone />
            <span>+1 (417) 379-8016</span>
          </a>
        </div>
      </div>
    </ContentWrapper>
  )
}

export default ContactPage
