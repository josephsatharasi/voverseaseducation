import { Navigate, Outlet } from 'react-router-dom'
import { ADMIN_SESSION_KEY } from '../../../utils/enquiryStorage'

export default function ProtectedAdminRoute() {
  const isAuthenticated =
    localStorage.getItem(ADMIN_SESSION_KEY) === 'true'

  return isAuthenticated
    ? <Outlet />
    : <Navigate to="/admin" replace />
}