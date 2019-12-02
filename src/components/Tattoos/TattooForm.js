import React from 'react'
import { Link } from 'react-router-dom'

const TattooForm = ({ tattoo, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label htmlFor="title">Title</label>
    <input
      id="title"
      placeholder="Your Tattoo Title"
      value={tattoo.title}
      name="title"
      onChange={handleChange}
    />

    <label htmlFor="picture">Picture Link:</label>
    <input
      id="author"
      placeholder="Input hpyerlink to an image of your tattoo"
      value={tattoo.picture}
      name="picture"
      onChange={handleChange}
    />

    <label htmlFor="description">Description:</label>
    <input
      id="description"
      placeholder="English"
      value={tattoo.description}
      name="description"
      onChange={handleChange}
    />

    <label htmlFor="date">Date:</label>
    <input
      id="date"
      placeholder="YYYY/MM/DD"
      value={tattoo.date}
      name="date"
      onChange={handleChange}
    />

    <label htmlFor="artist_name">Artist Name:</label>
    <input
      id="artist_name"
      value={tattoo.artist_name}
      name="artist_name"
      onChange={handleChange}
    />

    <label htmlFor="artist_instagram">Artist Instagram Handle:</label>
    <input
      id="artist_instagram"
      value={tattoo.artist_instagram}
      name="artist_instagram"
      onChange={handleChange}
    />

    <label htmlFor="location">Tattoo Shop:</label>
    <input
      id="artist_instagram"
      placeholder="Start typing to search for your tattoo shop"
      value={tattoo.location}
      name="location"
      onChange={handleChange}
    />

    <label htmlFor="location">Ink Brand:</label>
    <input
      id="ink_brand"
      value={tattoo.ink_brand}
      name="ink_brand"
      onChange={handleChange}
    />

    <button className="btn btn-success" type="submit">Create my tattoo!</button>
    <Link to={cancelPath}>
      <button className="btn btn-danger">Cancel</button>
    </Link>
  </form>
)

export default TattooForm
