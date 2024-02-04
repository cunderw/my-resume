import React from 'react'

import imagePath from '../../assets/images/profile.png'
import BodyText from '../../components/BodyText'
import ContentWrapper from '../../components/ContentWrapper'
import Heading from '../../components/Heading'
import Picture from '../../components/Picture'

const AboutPage: React.FC = () => {
  return (
    <ContentWrapper>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="md:col-span-1">
          <Picture src={imagePath} alt="Carson Underwood" />
        </div>
        <div className="flex flex-col space-y-4 md:col-span-1">
          <Heading text="About Me" />
          <BodyText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
        </div>
      </div>
    </ContentWrapper>
  )
}

export default AboutPage
