import React from 'react'
import axios from 'axios'

class Home extends React.Component {

  constructor() {
    super()
    this.state = {
      events: []
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    axios.get('https://www.skiddle.com/api/v1/events/search/?api_key=0c64ae5cca7903c86353520198c58021')
      .then(response => this.setState({events: response.data.results}))
  }

  handleChange(e) {
    console.log(e.target.value)
  }

  render() {
    if(!this.state.events[0]) return null
    return (
      <section className="hero is-danger is-fullheight">
        <div className="hero-body title-container">
          <div className="container">
            <h1 className="title is-1 title">Look for events near you</h1>
            <select onChange={this.handleChange} name="Location">
              {this.state.events.map((event, index) => <option key={index}
              >{event.venue.town}</option>)}
            </select>
          </div>
        </div>
      </section>
    )
  }
}
export default Home
