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
            <div key={index}> <EventCard {...event}/>
            </div>)}
        </div>
      </main>
    )
  }
}

export default EventsIndex
