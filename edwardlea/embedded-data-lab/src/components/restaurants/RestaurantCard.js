import React from 'react'
import { Link } from 'react-router-dom'


const RestaurantCard = ({_id, name, chef , cuisine  }) => {

  return (
    <div className="card">
      <Link to={`/restaurants/${_id}`}>
        <div className="card-header">
          <h4 className="card-header-title">{name}</h4>
        </div>
        <div className="card-content">
          <div className="content">
            <p> Chef: {chef.name}</p>
            <p> Cuisine: {cuisine}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default RestaurantCard
