import React from 'react'

import {Link} from 'react-router-dom'

const WinesCard =  ({ _id, name, image, origin, user }) =>  {
  return (
    <div >
      <Link to={`/wines/${_id}`}>
        <h4>{name}</h4>
        <img src={image}/>
        <p>Origin:<strong> {origin}</strong></p>
        <p>Uploaded by:<strong> {user.username}</strong></p>
      </Link>
    </div>
  )
}

export default WinesCard
