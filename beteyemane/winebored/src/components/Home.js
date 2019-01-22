import React from 'react'
import Map from './Map'
import axios from 'axios'

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      wines: []
    }
  }

  componentDidMount() {
    axios.get('https://winebored.herokuapp.com/wines')
      .then(res => this.setState({wines: res.data}))
  }

  render() {
    console.log(this.state.wines)
    return (
      <section className="hero is-light is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-size-2">
      Luxurious Wines
            </h1>
            <h2 className="subtitle is-size-4">
      from all around the world
            </h2>
            <Map />
          </div>
        </div>
      </section>
    )
  }
}
export default Home
