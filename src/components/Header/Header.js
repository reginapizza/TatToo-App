import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
// import LandingPage from '../LandingPage/LandingPage'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link href="#change-password">Change Password</Nav.Link>
    <Nav.Link href="#sign-out">Sign Out</Nav.Link>
    <Nav.Link href="#my-tattoos">My Tattoos</Nav.Link>
    <Nav.Link href="#create-tattoo">New Tattoo</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link href="#sign-in">Sign In</Nav.Link>
  </Fragment>
)

const alwaysOptions = (
  <div>
    <Nav.Link to="/">Home</Nav.Link>
  </div>
)

const Header = ({ user }) => {
  if (user) {
    return (
      <Navbar className= "navbar" bg="primary" variant="dark" expand="md">
        <Navbar.Brand className="navtitle" href="#">
          Tat, Too
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            { alwaysOptions }
            { user ? authenticatedOptions : unauthenticatedOptions }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
  return null
}

export default Header
