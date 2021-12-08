import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import useAuth from '../auth/useAuth'
import routes from '../helpers/routes'

const Navigation = () => {

  const { logout } = useAuth();

  return (
    <Navbar collapseOnSelect expand = "lg" variant = "dark" bg = "dark">
      <Navbar.Brand as = {NavLink} to = {routes.home}>Task Manager</Navbar.Brand>
      <Navbar.Toggle aria-controls = "responsive-navbar-nav" />
      <Navbar.Collapse id = "responsive-navbar-nav">
        <Nav className = "me-auto">
          <Nav.Link as = {NavLink} to = {routes.projects}>Projects</Nav.Link>
          <NavDropdown title = "Admin">
            <NavDropdown.Item as = {NavLink} to = {routes.admin.users}>Usuarios</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        
        <Nav className = "me-2">
          <NavDropdown 
            className = "me-5"
            id="nav-dropdown-dark-example"
            title="My Account"
            menuVariant="dark"
            >
              {/* <i class="fa-thin fa-user"></i> */}
            <NavDropdown.Item as = {NavLink} to = {routes.login}>Login</NavDropdown.Item>
            <NavDropdown.Item as = {NavLink} to = {routes.register}>Register</NavDropdown.Item>
            <NavDropdown.Item as = {NavLink} to = {routes.account}>Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item to = {routes.account} onClick = {logout}>logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  )
}

export default Navigation
