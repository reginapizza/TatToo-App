import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

// getting ONE tattoo after clicking on the title from `/tattoos`
const Tattoo = props => {
  const [tattoo, setTattoo] = useState(null)
  const userId = props.user.id
  console.log(userId)

  useEffect(() => {
    axios({
      url: `${apiUrl}/tattoos/${props.match.params.id}`,
      method: 'GET',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      }
    })
      .then(response => setTattoo(response.data.tattoo))
      .then(() => props.alert({ heading: 'Success!', message: 'You got the tat!', variant: 'success' })) // probaby get rid of this once it's working
      .catch(console.error)
  }, [])

  const handleDelete = event => {
    axios({
      url: `${apiUrl}/tattoos/${props.match.params.id}`,
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
  }
  return (
    <div className="row">
      <div className="col-6">
        <h2>{tattoo.title}</h2>
        {tattoo.description
          ? <p>{tattoo.description}</p>
          : <p>No description given for this tattoo.</p>
        }
        {tattoo.day
          ? <p>Date: {tattoo.day}</p>
          : <p>Date: N/A</p>
        }
        <p>Artist Name: <a href={tattoo.artist_instagram}>{tattoo.artist_name}</a></p>
        {tattoo.location
          ? <p>Tattoo Shop: {tattoo.location}</p>
          : <p>Tattoo Shop: N/A</p>
        }
        {tattoo.ink_brand
          ? <p>Ink Brand: {tattoo.ink_brand}</p>
          : <p>Ink Brand: N/A</p>
        }
      </div>
      <div className="col-6">
        {tattoo.picture
          ? <img src={tattoo.picture} alt={'Tattoo of ' + tattoo.title} height="300" width="300"></img>
          : <p>No image available.</p>
        }
      </div>
      {userId === tattoo.user_id && <Button onClick={handleDelete}>Delete</Button>}
    </div>
  )
}

export default withRouter(Tattoo)
