import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../auth/useAuth'
import routes from '../helpers/routes';

const AdminRoute = ({ hasRole: role }) => {
  // const auth = null; 

  const { hasRole } = useAuth();
  return (
    !hasRole(role) ? <Navigate to = {routes.home} /> : <Outlet />
  )
}

export default AdminRoute

