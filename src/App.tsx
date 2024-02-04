import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import AboutPage from './pages/About/AboutPage'
import ContactPage from './pages/Contact/ContactPage'
import ResumePage from './pages/Resume/ResumePage'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-16">
        {' '}
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App