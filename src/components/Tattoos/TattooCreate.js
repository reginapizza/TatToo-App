import React, { useState, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import TattooForm from './TattooForm'

const TattooCreate = props => {
  const [tattoo, setTattoo] = useState({ title: '', picture: '', description: '', day: '', artist_name: '', artist_instagram: '', location: '', ink_brand: '' })

  const handleChange = event => {
    event.persist()
    setTattoo({ ...tattoo, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/tattoos`,
      method: 'POST',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      },
      data: { tattoo }
    })
      .then(response => {
        console.log(response)
        props.alert({ heading: 'Success', message: 'You added your tattoo!', variant: 'success' })
        props.history.push(`/tattoos/${response.data.tattoo.id}`)
      })
      .catch(console.error)
  }

  return (
    <Fragment>
      <p className="page-headers">Add Your Tattoo</p>
      <TattooForm
        tattoo={tattoo}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath="/tattoos"
      />
    </Fragment>
  )
}

export default withRouter(TattooCreate)
