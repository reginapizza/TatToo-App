import React, { useEffect, useState, Fragment } from 'react'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

// getting ONE tattoo after clicking on the title from `/tattoos`
const Tattoo = props => {
  const [tattoo, setTattoo] = useState(null)
  const userId = props.user._id
  console.log(userId)

  useEffect(() => {
    axios(`${apiUrl}/tattoos/${props.match.params._id}`)
      .then(response => setTattoo(response.data.tattoo))
      .then(() => props.alert({ heading: 'Success!', message: 'You got the tat!', variant: 'success' })) // probaby get rid of this once it's working
      .catch(console.error)
  }, [])

  const handleDelete = event => {
    axios({
      url: `${apiUrl}/tattoos/${props.match.params._id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      }
    })
      .then(() => {
        props.alert({ heading: 'Success', message: 'You deleted your tattoo', variant: 'warning' })
        props.history.push('/tattoos/')
      })
      .catch(() => {
        props.alert({ heading: 'Ooopsies', message: 'Something went wrong!', variant: 'danger' })
      })
  }

  if (!tattoo) {
    return <p> Loading tattoos...please wait </p>
  } else {
    return (
      <Fragment>
        <h2>{tattoo.title}</h2>
        <p>{tattoo.description}</p>
        <p>Date: {tattoo.date}</p>
        <p>Artist Name: <a href={tattoo.artist_instagram}>{tattoo.artist_name}</a></p>
        <p>Tattoo Shop: {tattoo.location}</p>
        <p>Ink Brand: {tattoo.ink_brand}</p>
        <div>
          <img src={tattoo.picture} alt={'Tattoo of ' + tattoo.title} height="42" width="42"></img>
        </div>
        {userId === tattoo.owner._id && <Button onClick={handleDelete}>Delete</Button>}
      </Fragment>
    )
  }
}

export default withRouter(Tattoo)
