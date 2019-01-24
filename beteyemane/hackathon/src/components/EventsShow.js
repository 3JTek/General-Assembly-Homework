import React from 'react'
import axios from 'axios'

class EventsShow extends React.Component {

  constructor() {
    super()

    this.state = {
      events: []

    }
  }

  componentDidMount() {
    axios.get(`https://www.skiddle.com/api/v1/events/${this.props.match.params.id}/?api_key=0c64ae5cca7903c86353520198c58021/`)
      .then(response => this.setState({events: response.data.results}))
  }

  render(){
    const { eventname, date, description, largeimageurl, entryprice } = this.state.events
    return(
      <section className="section">
        <div className="container">
          <h1 className="title is-1">{eventname}</h1>
          <hr />

          <div className="columns">
            <div className="column">
              <figure className="image">
                <img src={largeimageurl} alt={eventname} />
              </figure>
            </div>

            <div className="column">
              <h4 className="title is-4">{}</h4>
              <p>{description}</p>
              <hr />
              <h3>{date}</h3>
              <h3>{entryprice}</h3>
              <hr />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default EventsShow
