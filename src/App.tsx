import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import { ResumeProvider } from './contexts/ResumeContext'
import AboutPage from './pages/About/AboutPage'
import ContactPage from './pages/Contact/ContactPage'
import Footer from './pages/Resume/components/Footer'
import ResumePage from './pages/Resume/ResumePage'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ResumeProvider>
        <Router>
          <Navbar />
          <div className="bg-gray-200 pb-2 pt-16">
            {' '}
            <Routes>
              <Route path="/about" element={<AboutPage />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/" element={<AboutPage />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </ResumeProvider>
    </QueryClientProvider>
  )
}

export default App
