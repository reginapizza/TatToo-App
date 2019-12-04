import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Icon from '@mdi/react'
import { mdiAccount, mdiPlus, mdiLogout, mdiHelp, mdiHome } from '@mdi/js'
// import LandingPage from '../LandingPage/LandingPage'

const authenticatedOptions = (
  <Fragment className="options">
    <Nav.Link href="#tattoos"><Icon path={mdiHome} title="Home"
      size={2}
      color="white"/></Nav.Link>
    <Nav.Link href="#create-tattoo"><Icon path={mdiPlus} title="Add A Tattoo"
      size={2}
      color="white"/></Nav.Link>
    <Nav.Link href="#my-tattoos"><Icon path={mdiAccount} title="User Profile"
      size={2}
      color="white"/></Nav.Link>
    <Nav.Link href="#about"><Icon path={mdiHelp} title="About"
      size={2}
      color="white"/></Nav.Link>
    <Nav.Link href="#sign-out"><Icon path={mdiLogout} title="Sign Out"
      size={2}
      color="white"/></Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link href="#sign-in">Sign In</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => {
  if (user) {
    return (
      <Navbar className= "navbar" bg="primary" variant="dark" expand="md">
        <Navbar.Brand className="navtitle" href="#tattoos">
          Tat, Too
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            { user ? authenticatedOptions : unauthenticatedOptions }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
  return null
}

export default Header
