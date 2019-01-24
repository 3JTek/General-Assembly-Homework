import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Home extends React.Component {

  constructor() {
    super()
    this.state = {
      search: '',
      events: []
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    axios.get('https://www.skiddle.com/api/v1/events/search/?api_key=0c64ae5cca7903c86353520198c58021')
      .then(response => this.setState({events: response.data.results}))
  }

  handleChange(e) {
    const location = e.target.value
    console.log(location)
    const manchesterLatLng = 'latitude=53.4839&longitude=-2.2446'
    axios.get(`https://www.skiddle.com/api/v1/events/search/?api_key=0c64ae5cca7903c86353520198c58021&${manchesterLatLng}&radius=5`)
      .then(response => this.setState({search: response.data.results}))
  }

  handleSubmit(e) {
    e.preventDefault()
  }

  render() {
    if(!this.state.events[0]) return null
    console.log(this.state.search)
    return (
      <section className="hero is-danger is-fullheight">
        <div className="hero-body title-container">
          <div className="container">
            <h1 className="title is-1 title">Look for events near you</h1>
            <select onChange={this.handleChange} name="Location">
              {this.state.events.map((event, index) => <option key={index}
              >{event.venue.town}</option>)}
            </select>
            <Link to="/events" className="button is-black">Go!</Link>
          </div>
        </div>
      </section>
    )
  }
}
export default Home
