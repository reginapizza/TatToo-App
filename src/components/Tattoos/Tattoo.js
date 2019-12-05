import React, { useEffect, useState, Fragment } from 'react'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

// getting ONE tattoo after clicking on the title from `/tattoos`
const Tattoo = props => {
  const [tattoo, setTattoo] = useState(null)
  const userId = props.user.id
  console.log(props)

  useEffect(() => {
    axios({
      url: `${apiUrl}/tattoos/${props.match.params.id}`,
      method: 'GET',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      }
    })
      .then(response => setTattoo(response.data.tattoo))
      .catch(console.error)
  }, [])

  console.log(tattoo)

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

  const renderArtistTag = () => {
    if (tattoo.artist_name && tattoo.artist_instagram) {
      return <p>Artist Name: <a href={tattoo.artist_instagram} target="blank">{tattoo.artist_name}</a></p>
    } else if (tattoo.artist_name) {
      return <p>Artist Name: {tattoo.artist_name}</p>
    } else if (tattoo.artist_instagram) {
      return <p>Artist Instagram Handle: <a href={tattoo.artist_instagram} target="blank">{tattoo.artist_instagram}</a></p>
    } else if (!tattoo.artist_name && !tattoo.artist_instagram) {
      return <p>Artist: N/A</p>
    }
  }

  return (
    <div className="tattoo-full">
      <div className="row">
        <div className="col-6">
          <h2 className="center">{tattoo.title}</h2>
          {tattoo.description
            ? <p>{tattoo.description}</p>
            : <p>No description given for this tattoo.</p>
          }
          {tattoo.day
            ? <p>Date: {tattoo.day}</p>
            : <p>Date: N/A</p>
          }
          {renderArtistTag()}
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
            ? <img src={tattoo.picture} alt={'Tattoo of ' + tattoo.title} className="tattoo-image"></img>
            : <img src="no-image-available.png" className="tattoo-image"></img>
          }
        </div>
      </div>
      <div className='row'>
        {userId === tattoo.user_id && (
          <Fragment>
            <Button href={`#tattoos/${props.match.params.id}/edit`} className="submit-button">Update</Button>
            <Button onClick={handleDelete} className="submit-button">Delete</Button>
          </Fragment>
        )}
        <Button href="#tattoos" className="submit-button">Back</Button>
      </div>
    </div>
  )
}

export default withRouter(Tattoo)
