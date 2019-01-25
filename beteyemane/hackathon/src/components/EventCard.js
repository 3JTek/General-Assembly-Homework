import React from 'react'
import { Link } from 'react-router-dom'
const EventCard = ({ id, eventname, description, venue, largeimageurl, date, openingtimes }) => {

  return (
    <div className="card">
      <Link to={`/events/${venue.town}/${id}`}>
        <div className="card-header">
          <h1 className="card-header-title title is-4"> {eventname} </h1>
        </div>
        <h2 className="card-header-title venue-title">{venue.name}</h2>
        <div className="card-image">
          <figure className="image">
            <img src={largeimageurl} alt={eventname} width="300px"/>
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            <h3>{description}</h3>
            <h3>{date}</h3>
            <h4> Time: {openingtimes.doorsopen} - {openingtimes.doorsclose}</h4>
            <h4> location: {venue.town} </h4>
          </div>
        </div>
      </Link>
    </div>

  )
}

export default EventCard
