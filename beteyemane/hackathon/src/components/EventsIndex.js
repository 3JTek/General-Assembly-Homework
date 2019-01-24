import React from 'react'
import axios from 'axios'

class EventsIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      events: []
    }
  }

  componentDidMount() {
    axios.get('https://www.skiddle.com/api/v1/events/search/?api_key=0c64ae5cca7903c86353520198c58021')
      .then(response => this.setState({events: response.data.results}))
  }

  render() {
    if(!this.state.events[0]) return null
    console.log('events.results', this.state.events)

    return (
      <main>
        <div>
          {this.state.events.map((event, index) =>
            <div key={index}> <h1> {event.eventname} </h1>
              <h2>{event.venue.name}</h2>
              <img src={event.imageurl} alt={event.eventname} />
              <h3>{event.date}</h3>
              <h4> Time: {event.openingtimes.doorsopen} - {event.openingtimes.doorsclose}</h4>
              <h3>{event.description}</h3>
            </div>)}
        </div>
      </main>
    )
  }
}

export default EventsIndex
