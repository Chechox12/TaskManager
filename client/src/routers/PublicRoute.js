import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../auth/useAuth'
import routes from '../helpers/routes';

const PublicRoute = () => {
  // const auth = null; 

  const { isLogged } = useAuth();
  return (
    isLogged() ? <Navigate to = {routes.projects} /> : <Outlet />
  )
}

export default PublicRoute

