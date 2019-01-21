import React from 'react'

const WineCard = ({ name, image, origin, tastingNotes }) => {
  return(
    <div className="card">
      <div className="card-header">
        <h3 className="card-header-title title is-4">{name}</h3>
      </div>
      <div className="card-image">
        <figure className="image">
          <img src={image} alt={name} />
        </figure>
      </div>
      <div className="card-content">
        <h4 className="subtitle is-5"><strong>Origin:</strong> {origin}</h4>
        <p><strong>Tasting Notes:</strong> {tastingNotes}</p>
      </div>
    </div>
  )
}

export default WineCard
