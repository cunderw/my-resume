import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-4 text-center">
      <a
        href="https://github.com/cunderw/my-resume"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 transition duration-300 ease-in-out hover:text-blue-800"
      >
        View the code for this site on GitHub
      </a>
    </footer>
  )
}

export default Footer
