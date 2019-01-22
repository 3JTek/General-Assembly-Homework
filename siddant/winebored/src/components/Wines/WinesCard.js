import React from 'react'

import {Link} from 'react-router-dom'

const WinesCard =  ({ _id, name, image, origin, user }) =>  {

  return (
    <div >
      <div className="card">

        <Link to={`/wines/${_id}`}>
          <div className="card-image">
            <figure className="image" style={{backgroundImage: `url(${image})`}} />
          </div>
          <div className="card-content">
            <div className="media-content">
              <p className="title is-4">{name}</p>
            </div>
            <div className="content">
              <p>Origin:<strong> {origin}</strong></p>
              <p>Uploaded by:<strong> {user.username}</strong></p>
            </div>
          </div>
        </Link>
        <div className="control">
          <Link className="button is-danger" to={`/wines/edit/${_id}`}>Edit the Wine</Link>
        </div>
      </div>

    </div>
  )
}

export default WinesCard
