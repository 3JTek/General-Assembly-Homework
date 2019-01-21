import React from 'react'

const WineCard = ({_id, name, image, origin, price}) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image" style={{ backgroundImage: `url(${image})`}}>
        </figure>
      </div>
    </div>
  )
}

export default WineCard
