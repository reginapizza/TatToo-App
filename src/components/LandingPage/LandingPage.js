import React from 'react'
import { Button } from 'react-bootstrap'

const LandingPage = () => (
  <div className="landing-page container-fluid">
    <div className="title">
      <img src="TatToo.gif" alt="Tat, Too"/>
    </div>
    <div className="slogan">
      <img src="slogan.gif" alt="Your Personal Tattoo Gallery"/>
    </div>
    <div className="row">
      <div className="col-12 auth">
        <Button className="auth-buttons" href="#sign-in">Sign In</Button>
      </div>
      <div className="col-12 auth">
        <Button className="auth-buttons" href="#sign-up">Sign Up</Button>
      </div>
    </div>
  </div>
)

export default LandingPage
