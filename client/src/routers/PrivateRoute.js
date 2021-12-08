import { Navigate, Outlet, useLocation } from 'react-router-dom'
import useAuth from '../auth/useAuth'
import routes from '../helpers/routes'

const PrivateRoute = ({ hasRole: role }) => {
  // const auth = null; 

  const { isLogged } = useAuth();

  // user ? <Outlet /> : <Navigate to = "/login" />
  // if (!user) ? <Outlet /> : <Navigate to = "/login" />
  // if (user) return <Navigate to = "/projects" />

  // if(role && user?.role !== role) return <Navigate to = "/" />

  const location = useLocation();
  // console.log(location);

  return (
    // if (role && user?.role !== role) {
    //   isAdmin = true;
    //   return isAdmin
    // },
    // <Routes>
    //   <Route {...rest} />
    // </Routes>
    isLogged() ? <Outlet /> : <Navigate to={routes.login} state={{from:location}} />
    // role && user?.role !== role ? <Navigate to = "/" /> : <Outlet />
    // isAdmin ? <Outlet /> : <Navigate to = "/" />
    // if (role && user?.role !== role) return <Navigate to = "/" />
  )
};

export default PrivateRoute

