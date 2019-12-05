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
      .then(() => props.alert({ heading: 'Success', message: 'Here are your tats!', variant: 'success' }))
      .catch(() => props.alert({ heading: 'Oops!', message: 'Sorry, something went wrong...', variant: 'danger' }))
  }, [])

  const tattoosJsx = tattoos.map(tattoo => (
    <ListGroup.Item
      key={tattoo.id}
      action
      href={`#tattoos/${tattoo.id}`}
      className="container-fluid tattoo-teaser"
    >
      <div className="row">
        {tattoo.title}
      </div>
      <div className="row">
        {tattoo.picture
          ? <img src={tattoo.picture} alt={'Tattoo of ' + tattoo.title} height="350" width="350"></img>
          : <img src="no-image-available.png" height="350" width="350"></img>
        }
      </div>
    </ListGroup.Item>
  ))

  return (
    <div className='row'>
      <div className='col'>
        <div>
          <div className="page-headers">
            <p> My Tattoos</p>
            <span className="profile-buttons">{props.user && <Button href="/create-tattoo">Add your own tattoo!</Button>}
              <Button href="#change-password">Change Password</Button>
            </span>
          </div>
        </div>
        <ListGroup>
          {tattoosJsx}
        </ListGroup>
      </div>
    </div>
  )
}

export default Tattoos
