
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useLocation,
} from 'react-router-dom'

import { useEffect } from 'react'

// Public website components
import Navbar from './features/navbar/Navbar'
import Footer from './features/footer/Footer'

// Public website pages
import HomePage from './pages/home/HomePage'
import AboutPage from './pages/about/AboutPage'
import DestinationsPage from './pages/destinations/DestinationsPage'
import ServicesPage from './pages/services/ServicesPage'
import CoursesPage from './pages/courses/CoursesPage'
import ContactPage from './pages/contact/ContactPage'

// Admin pages
import AdminLogin from './features/admin/pages/AdminLogin'
import AdminDashboard from './features/admin/pages/AdminDashboard'
import ProtectedAdminRoute from './features/admin/components/ProtectedAdminRoute'

// Scroll to top
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

// Public website layout
function PublicLayout() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

// Main application
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        {/* Public Website Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>

        {/* Admin Login */}
        <Route path="/admin" element={<AdminLogin />} />

        {/* Protected Admin Dashboard */}
        <Route element={<ProtectedAdminRoute />}>
          <Route
            path="/admin/dashboard"
            element={<AdminDashboard />}
          />
        </Route>

        {/* Unknown routes */}
        <Route
          path="*"
          element={
            <div className="flex min-h-screen items-center justify-center">
              <h1 className="text-2xl font-bold text-gray-800">
                404 - Page Not Found
              </h1>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
