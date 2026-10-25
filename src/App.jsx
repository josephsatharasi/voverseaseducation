import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './features/navbar/Navbar'
import Footer from './features/footer/Footer'
import HomePage from './pages/home/HomePage'
import AboutPage from './pages/about/AboutPage'
import DestinationsPage from './pages/destinations/DestinationsPage'
import ServicesPage from './pages/services/ServicesPage'
import CoursesPage from './pages/courses/CoursesPage'
import ContactPage from './pages/contact/ContactPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"             element={<HomePage />} />
          <Route path="/about"        element={<AboutPage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/services"     element={<ServicesPage />} />
          <Route path="/courses"      element={<CoursesPage />} />
          <Route path="/contact"      element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
