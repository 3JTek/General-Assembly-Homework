import React from 'react'

import { Link } from 'react-router-dom'

const WineCard = ( {_id, name, image, origin, user} ) => {
  console.log('name',name)
  return(
    <div className="card">
      <Link to={`/wines/${_id}`} >
        <div className="card-header">
          <h4 className="card-header-title">{name}</h4>
        </div>

        <div className="card-image">
          <div className="card-image">
            <figure className="image" style={{ backgroundImage: `url(${image})` }} />
          </div>
        </div>

        <div className="card-content">
          <div className="conent">
            <p>Origin: {origin}</p>
            <p>Uploaded by: {user.username}</p>
          </div>
        </div>

      </Link>
    </div>
  )
}

export default WineCard
