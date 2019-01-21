import React from 'react'
import {Link} from 'react-router-dom'

const WineCard = (wine) => {
  const {_id, name, image} = wine
  return(
    <div key={_id}>
      <Link to={`/wines/${_id}`} >
        <h1>{name}</h1>
        <img src={image}/>
      </Link>
    </div>
  )
}

export default WineCard
