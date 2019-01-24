import React from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'

class EventsShow extends React.Component {
  constructor() {
    super()

    this.state = {
      event: []
    }
  }

  componentDidMount() {
    axios.get(`https://cors-anywhere.herokuapp.com/https://www.skiddle.com/api/v1/events/${this.props.match.params.id}/?api_key=7cb09683e2899aeb509e27ee73dfaf8a&eventcode=COMEDY`)
      .then( res => this.setState({ event: res.data }))
      .catch(err => alert(err.message))
  }

  // buyTicket() {
  //   window.location={this.state.event.results.link}
  // }

  render() {
    // console.log(this.props.match)
    console.log(this.props)


    if (!this.state.event.results) return null
    const { eventname, link, description, largeimageurl, entryprice, venue } = this.state.event.results
    const initDate = this.state.event.results.date.split('-')
    const sortedDate = initDate[2] + '/' + initDate[1] + '/' +  initDate[0]

    console.log(sortedDate)
    return(

      <section className="section">
        <div className="container">



          <div className="columns">

            <div className="column">
              <figure className="image">
                <img src={largeimageurl} alt={eventname} />
              </figure>
            </div>

            <div className="content column">
              <h1 className="title is-1">{eventname}</h1>
              <h2 className="column">{sortedDate}</h2>
              <p className="column">{description}</p>
              <div className="column">
                <p><strong>Address: </strong> {venue.address}, {venue.town} </p>
                <p><strong>Postcode: </strong> {venue.postcode}</p>
                <p><strong>Price: </strong>{entryprice} + booking fee</p>
                <hr />

                <Link to={'/events'} className="button is-primary">Back</Link>


                <a href={link}><button className="button is-primary" href={link}>Buy Tickets</button></a>


              </div>
            </div>

          </div>



        </div>

      </section>
    )
  }
}

export default EventsShow
