import React from 'react'
import { Link } from 'react-router-dom'

const WineboredsCards = ({ _id, name, image, origin, grape, price, tastingNotes}) => {
  return (
    <div className="card">
      <Link to={`/wines/${_id}`}>
        <div className='card-header'>
          <h4 className='card-header-title is-centered'>{name}</h4>
        </div>

        <div className='card-image'>
          <figure className='image' style={{backgroundImage: `url(${image})`}} />
        </div>

        <div className='card-content'>
          <div className='content'>
            <p><strong>Origin: </strong>{origin}</p>
            <p><strong>Grape: </strong>{grape}</p>
            <p><strong>Price: </strong>{price}</p>
            <p><strong>Tasting Notes: </strong>{tastingNotes}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default WineboredsCards
