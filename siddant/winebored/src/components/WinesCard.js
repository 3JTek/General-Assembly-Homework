import React from 'react'

import {Link} from 'react-router-dom'

const WinesCard =  ({ _id, name, image, origin, user }) =>  {
  return (
    <div >
      <Link to={`/wines/${_id}`}>
        <div className="card">
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
        </div>

      </Link>
    </div>
  )
}

export default WinesCard
