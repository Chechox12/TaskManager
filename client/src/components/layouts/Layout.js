import Navigation from "../Navigation"

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      { children }
      {/* <h1>Footer</h1> */}
    </>
  )
}

export default Layout
