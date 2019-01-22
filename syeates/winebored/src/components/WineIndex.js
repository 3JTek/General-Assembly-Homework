import React from 'react'
import axios from 'axios'

import WineCard from './WineCard'

class WineIndex extends React.Component {

  constructor() {
    super()

    this.state = {
      Wines: []
    }
  }

  componentDidMount() {
    axios.get('https://winebored.herokuapp.com/wines')
      .then(res => this.setState({ Wines: res.data }))
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.Wines.map(wine =>
              <div className="column is-one-quarter" key={wine._id}>
                <WineCard {...wine} />
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default WineIndex
