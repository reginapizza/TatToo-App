import React, { useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const Tattoos = props => {
  const [tattoos, setTattoos] = useState([])

  useEffect(() => {
    axios({
      url: `${apiUrl}/tattoos/`,
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
      key={tattoo.id}
      action
      href={`#tattoos/${tattoo.id}`}
    >
      {tattoo.title}
      {tattoo.picture}
    </ListGroup.Item>
  ))

  return (
    <div className='row'>
      <div className='col'>
        <div>
          <h1>Tattoos:</h1>
        </div>
        <ListGroup>
          {tattoosJsx}
        </ListGroup>
      </div>
    </div>
  )
}

export default Tattoos
