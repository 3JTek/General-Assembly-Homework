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
    axios.get('https://www.skiddle.com/api/v1/events/?api_key=0c64ae5cca7903c86353520198c58021')
      .then(response => this.setState({events: response.data.results}))
  }

  filerTown() {
    this.state.events.filer((event => event))
    
  }

  render() {
    console.log(this.state.events[0])

    if(!this.state.events[0]) return null

    return (
      <main className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.events.map((event, index) =>
              <div className="column is-one-half" key={index}>
                <EventCard {...event}/>
              </div>)}
          </div>
        </div>
      </main>
    )
  }
}

export default EventsIndex
