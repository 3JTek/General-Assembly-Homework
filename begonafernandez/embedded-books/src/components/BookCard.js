import React from 'react'
import { Link } from 'react-router-dom'

const BookCard = ({ _id, title, author, image }) => {
  return (
    <div className="card">
      <Link to={`/books/${_id}`}>
        <div className="card-header">
          <h4 className="card-header-title">{title}</h4>
        </div>

        <div className="card-image">
          <figure className="image" >
            <img src={image}/>
          </figure>
        </div>

        <div className="card-content">
          <div className="content">
            <p><strong>Author:</strong> {author.name}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default BookCard
