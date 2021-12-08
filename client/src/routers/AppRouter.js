import {  Routes, Route } from 'react-router-dom'
import roles from '../helpers/roles'
import routes from '../helpers/routes'
import Account from '../Pages/Account/Account'
import Users from '../Pages/admin/Users'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import NotFound from '../Pages/NotFound/NotFound'
import Project from '../Pages/Project/Project'
import Projects from '../Pages/projects/Projects'
import Register from '../Pages/Register/Register'
import AdminRoute from './AdminRoute'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const AppRouter = () => {
  return (
        <Routes>
          <Route exact path = {routes.home} element = { <PublicRoute /> }>
            <Route exact path = {routes.home} element = { <Home /> } />
          </Route>
          <Route exact path = {routes.login} element = { <PublicRoute /> }>
            <Route exact path = {routes.login} element = { <Login /> } />
          </Route>
          <Route exact path = {routes.register} element = { <PublicRoute /> }>
            <Route exact path = {routes.register} element = { <Register /> } />
          </Route>
          <Route exact path = {routes.account} element = { <PrivateRoute /> }>
            <Route exact path = {routes.account} element = { <Account /> } />
          </Route>
          <Route exact path = {routes.projects} element = { <PrivateRoute /> }>
            <Route exact path = {routes.projects} element = { <Projects /> } />
          </Route>
          <Route exact path = {routes.project()} element = { <PrivateRoute /> }>
            <Route exact path = {routes.project()} element = { <Project /> } />
          </Route>
          <Route exact path = {routes.admin.users} element = { <AdminRoute hasRole = {roles.admin} /> }>
            <Route exact path = {routes.admin.users} element = { <Users /> } />
          </Route>

          <Route path = "*" element = { <NotFound /> } />
        </Routes>
  )
}

export default AppRouter
