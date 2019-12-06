import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const Tattoos = props => {
  const [tattoos, setTattoos] = useState([])

  useEffect(() => {
    axios({
      url: `${apiUrl}/my_tattoos`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      }
    })
      .then(response => {
        setTattoos(response.data.tattoos)
      })
      .catch(() => props.alert({ heading: 'Oops!', message: 'Sorry, something went wrong...', variant: 'danger' }))
  }, [])

  const tattoosJsx = tattoos.map(tattoo => (
    <ListGroup.Item
      key={tattoo.id}
      action
      href={`#tattoos/${tattoo.id}`}
      className="container-fluid tattoo-teaser"
    >
      <div className="row center">
        {tattoo.title}
      </div>
      <div className="row">
        {tattoo.picture
          ? <img src={tattoo.picture} alt={'Tattoo of ' + tattoo.title} className="tattoo-image"></img>
          : <img src="no-image-available.png" className="tattoo-image"></img>
        }
      </div>
    </ListGroup.Item>
  ))

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="page-headers col-12">
          <p> My Tattoos</p>
        </div>
      </div>
      <div className="row">
        <div className="profile-buttons col-12 center">
          {props.user && <Button href="#create-tattoo" className="submit-button">Add your own tattoo!</Button>}
          <Button href="#change-password" className="submit-button">Change Password</Button>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <ListGroup>
            {tattoosJsx}
          </ListGroup>
        </div>
      </div>
    </div>
  )
}

export default Tattoos
