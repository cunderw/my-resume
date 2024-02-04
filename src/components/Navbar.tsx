import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link
            to="/about"
            className="transition-colors duration-200 hover:text-gray-200"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/resume"
            className="transition-colors duration-200 hover:text-gray-200"
          >
            Resume
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="transition-colors duration-200 hover:text-gray-200"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
