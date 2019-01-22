import React from 'react'
import { Link } from 'react-router-dom'

const WineCard = ({ _id, image, name}) => {
  return(
    <Link to={`/wines/${_id}`}>
      <div className="card">
        <div className="card-image">
          <figure className='image' style={{backgroundImage: `url(${image})`}} />
        </div>
        <div className="card-content">
          <div className="content">
            <h4 className="title is-4">{name}</h4>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default WineCard
