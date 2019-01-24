import React from 'react'
// import { Link } from 'react-router-dom'
const EventCard = ({ eventname, description, venue, imageurl, date, openingtimes }) => {

  return (
    <div>

      <h1> {eventname} </h1>
      <h2>{venue.name}</h2>
      <img src={imageurl} alt={eventname} />
      <h3>{date}</h3>
      <h4> Time: {openingtimes.doorsopen} - {openingtimes.doorsclose}</h4>
      <h3>{description}</h3>
    </div>
  )
}

export default EventCard
