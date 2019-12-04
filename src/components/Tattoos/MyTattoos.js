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
        setTattoos(response.data.tattoos.reverse())
      })
      .then(() => props.alert({ heading: 'Success', message: 'Here are your tats!', variant: 'success' }))
      .catch(() => props.alert({ heading: 'Oops!', message: 'Sorry, something went wrong...', variant: 'danger' }))
  }, [])

  const tattoosJsx = tattoos.map(tattoo => (
    <ListGroup.Item
      key={tattoo._id}
      action
      href={`#tattoos/${tattoo._id}`}
    >
      {tattoo.title}
    </ListGroup.Item>
  ))

  return (
    <div className='row'>
      <div className='col'>
        <div>
          <div className="page-headers">
            <p> My Tattoos</p>
            {props.user && <Button href="/create-tattoo">Add your own tattoo!</Button>}
            <Button href="#change-password">Change Password</Button>
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
