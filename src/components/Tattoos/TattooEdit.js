import React, { useState, useEffect } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import TattooForm from './TattooForm'

const TattooEdit = (props) => {
  const [tattoo, setTattoo] = useState({ title: '', picture: '', description: '', day: '', artist_name: '', artist_instagram: '', location: '', ink_brand: '' })
  const [updated, setUpdated] = useState(false)

  useEffect(() => {
    axios(`${apiUrl}/tattoos/${props.match.params.id}`)
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
        props.alert({ heading: 'Success', message: 'You updated your tattoo!', variant: 'success' })
        setUpdated(true)
      })
      .catch(() => props.alert({ heading: 'Oops!', message: 'Sorry, something went wrong...', variant: 'danger' }))
  }

  if (updated) {
    return <Redirect to={`/tattoos/${props.match.params.id}`} />
  }

  return (
    <TattooForm
      tattoo={tattoo}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      cancelPath={`#tattoos/${props.match.params.id}`}
    />
  )
}

export default withRouter(TattooEdit)
