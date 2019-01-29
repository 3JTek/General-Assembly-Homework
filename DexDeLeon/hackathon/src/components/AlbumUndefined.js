import React from 'react'
import { Link } from 'react-router-dom'

const AlbumUndefined = (props) => {

  return(
    <section className="section album-undefined">
      <div className="container">
        <h1 className="title is-1 has-text-centered">Sorry, album data not found.</h1>
        <div className="columns">
          <Link to={`/${props.match.params.artist}`} className="button column is-one-third">
            Back to Artist
          </Link>
          <Link to='/' className="button column is-one-third">
            Back to Search
          </Link>
        </div>
      </div>
    </section>
  )

}

export default AlbumUndefined
