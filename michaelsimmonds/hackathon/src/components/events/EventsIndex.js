import React from 'react'
import axios from 'axios'

import EventCard from './EventCard'

class EventsIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      events: []
    }
  }

  componentDidMount() {
    axios.get('https://cors-anywhere.herokuapp.com/https://www.skiddle.com/api/v1/events/search/?api_key=7cb09683e2899aeb509e27ee73dfaf8a&latitude=51.508&longitude=-0.076&radius=5&eventcode=COMEDY&mindate=2019-01-25&order=&limit=100')
      .then(res => this.setState({ events: res.data }))
      .catch(err => alert(err.message))
  }

  render () {
    if(!this.state.events.results) return null
    console.log(this.state.events.results[1].date)

    // console.log(sortedDate)

    return(
      <section className="section">
        <div className="container">
          <h1 className="title">Comedy Nights in London</h1>
          <div className="columns is-multiline">
            {this.state.events.results.map(event => (
              <div className="column is-one-quarter" key={event.id}>
                <EventCard {...event}/>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
}

export default EventsIndex

// <h1>{this.state.events.results[index].eventname}</h1>
