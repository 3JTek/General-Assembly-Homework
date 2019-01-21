import React from 'react'
import { Link } from 'react-router-dom'


const WineCard = ({ _id, name, image, origin }) => {
  return (
    <div className="card">
      <Link to={`/wines/${_id}`}>
        <div className="card-header">
          <h4 className="card-header-title">{name} </h4>
        </div>

        <div className="card-image">
          <figure className="image" style={{backgroundImage: `url(${image})`}} />
        </div>

        <div className="card-content">
          <div ClassName="content">
            <p>Origin:{origin}</p>
          </div>
        </div>
      </Link>
    </div>

  )
}

export default WineCard
