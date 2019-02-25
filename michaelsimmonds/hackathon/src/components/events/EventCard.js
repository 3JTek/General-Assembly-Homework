import React from 'react'
import { Link } from 'react-router-dom'

const EventCard = ({ id, eventname, venue, date, largeimageurl}) => {

  const initDate = date.split('-')
  const sortedDate = initDate[2] + '/' + initDate[1] + '/' +  initDate[0]

  return(
    <div className="card">
      <Link to={`/events/${id}`}>

        <div>
          <h4 className="card-header-title">{eventname}</h4>
        </div>

        <div className="card-image">
          <figure className="image" style={{backgroundImage: `url(${largeimageurl})`}} />
        </div>

        <div className="card-content">
          <div className="content">
            <p><strong>{sortedDate}</strong></p>
            <p>{venue.name}</p>
            <p>{venue.address}, {venue.town}</p>
            <p>{venue.postcode}</p>
          </div>
        </div>

      </Link>
    </div>
  )
}

export default EventCard
