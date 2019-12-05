import React from 'react'
import { Button } from 'react-bootstrap'

const LandingPage = () => (
  <div className="landing-page container-fluid">
    <div>
      <img src="TatToo.gif" alt="Tat, Too" className="title"/>
    </div>
    <div>
      <img src="slogan.gif" alt="Your Personal Tattoo Gallery" className="slogan"/>
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
