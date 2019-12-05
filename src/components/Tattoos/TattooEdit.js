import React, { useState, useEffect, Fragment } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import TattooForm from './TattooForm'

const TattooEdit = (props) => {
  const [tattoo, setTattoo] = useState({ title: '', picture: '', description: '', day: '', artist_name: '', artist_instagram: '', location: '', ink_brand: '' })
  const [updated, setUpdated] = useState(false)

  useEffect(() => {
    axios({
      url: `${apiUrl}/tattoos/${props.match.params.id}`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      }
    })
      .then(res => setTattoo(res.data.tattoo))
      .catch(console.error)
  }, [])

  const handleChange = event => {
    event.persist()
    setTattoo(tattoo => ({ ...tattoo, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/tattoos/${props.match.params.id}`,
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      },
      data: { tattoo }
    })
      .then(response => {
        setUpdated(true)
      })
      .catch(() => props.alert({ heading: 'Oops!', message: 'Sorry, something went wrong...', variant: 'danger' }))
  }

  if (updated) {
    return <Redirect to={`/tattoos/${props.match.params.id}`} />
  }

  return (
    <Fragment>
      <div>
        <p className="page-headers">Edit Your Tattoo</p>
      </div>
      <TattooForm
        tattoo={tattoo}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath={`#tattoos/${props.match.params.id}`}
      />
    </Fragment>
  )
}

export default withRouter(TattooEdit)
