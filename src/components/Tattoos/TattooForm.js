import React from 'react'
import { Link } from 'react-router-dom'

const TattooForm = ({ tattoo, handleSubmit, handleChange, cancelPath }) => (
  <form className="tattoo-form" onSubmit={handleSubmit}>
    <div>
      <label htmlFor="title">Title</label>
    </div>
    <div>
      <input
        className="form"
        id="title"
        placeholder="Your Tattoo Title"
        value={tattoo.title}
        name="title"
        onChange={handleChange}
      />
    </div>

    <div>
      <label htmlFor="picture">Picture Link:</label>
    </div>
    <div>
      <input
        className="form"
        id="author"
        placeholder="Input hyperlink to an image of your tattoo"
        value={tattoo.picture}
        name="picture"
        onChange={handleChange}
      />
    </div>

    <div>
      <label htmlFor="description">Description:</label>
    </div>
    <div>
      <input
        className="form"
        id="description"
        value={tattoo.description}
        name="description"
        onChange={handleChange}
      />
    </div>

    <div>
      <label htmlFor="day">Date:</label>
    </div>
    <div>
      <input
        className="form"
        id="day"
        placeholder="YYYY-MM-DD"
        value={tattoo.day || ''}
        name="day"
        onChange={handleChange}
      />
    </div>

    <div>
      <label htmlFor="artist_name">Artist Name:</label>
    </div>
    <div>
      <input
        className="form"
        id="artist_name"
        value={tattoo.artist_name}
        name="artist_name"
        onChange={handleChange}
      />
    </div>

    <div>
      <label htmlFor="artist_instagram">Artist Instagram Handle:</label>
    </div>
    <div>
      <input
        className="form"
        id="artist_instagram"
        value={tattoo.artist_instagram}
        name="artist_instagram"
        onChange={handleChange}
      />
    </div>

    <div>
      <label htmlFor="location">Tattoo Shop:</label>
    </div>
    <div>
      <input
        className="form"
        id="artist_instagram"
        value={tattoo.location}
        name="location"
        onChange={handleChange}
      />
    </div>

    <div>
      <label htmlFor="location">Ink Brand:</label>
    </div>
    <div>
      <input
        className="form"
        id="ink_brand"
        value={tattoo.ink_brand}
        name="ink_brand"
        onChange={handleChange}
      />
    </div>

    <button className="submit-button" type="submit">Submit</button>
    <Link to={cancelPath}>
      <button className="submit-button">Cancel</button>
    </Link>
  </form>
)

export default TattooForm
