import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const Tattoos = props => {
  const [tattoos, setTattoos] = useState([])

  useEffect(() => {
    axios(`${apiUrl}/tattoos`)
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
          <h1>Tattoos:</h1>
          {props.user && <Link to="/create-tattoo">Add your own Tattoo!</Link>}
        </div>
        <ListGroup>
          {tattoosJsx}
        </ListGroup>
      </div>
    </div>
  )
}

export default Tattoos
