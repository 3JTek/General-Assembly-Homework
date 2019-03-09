import React from 'react'
import { Link } from 'react-router-dom'

const blogCard = ({ _id, name, image }) => {
  return (
    <div className="card">
      <Link to={`/blogs/${_id}`}>
        <div className="card-header">
          <h4 className="card-header-title">{name}</h4>
        </div>

        <div className="card-image">
          <figure className="image" style={{ backgroundImage: `url(${image})` }} />
        </div>

      </Link>
    </div>
  )
}

export default blogCard