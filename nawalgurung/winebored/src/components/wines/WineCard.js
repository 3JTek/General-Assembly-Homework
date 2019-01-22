import React from 'react'
//destructor react-router-dom Link
import { Link } from 'react-router-dom'

const WineCard = ({ _id, name, origin, image, user}) => {
  return (
  // Link to will link to /wines/:id of the clicked wine card
    <div className="card">

      <Link to={`/wines/${_id}`} >
        <div className="card-header">
          <h4 className="card-header-title">{name}</h4>
        </div>

        <div className="card-image">
          <figure className="image" style={{ backgroundImage: `url(${image})`}} />
        </div>

        <div className="card-content">
          <div className="content">
            <p><strong>Origin:</strong>{origin}</p>
            <p><strong>Uploaded by:</strong>{user.username}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default WineCard
