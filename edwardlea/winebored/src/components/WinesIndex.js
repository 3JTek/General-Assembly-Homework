import React from 'react'
import axios from 'axios'

import WineCard from './WineCard'

class WinesIndex extends React.Component {
  constructor(){
    super()

    this.state = {
      wines: []
    }
  }

  componentDidMount(){
    axios.get('https://winebored.herokuapp.com/wines')
      .then(res => this.setState({wines: res.data}))
  }

  render(){
    console.log(this.state.wines)
    return (
      <section className="section">
        <div className="container">
          <h1 className="title is-1">Wines Index</h1>
          <div className="columns is-multiline">
            {this.state.wines.map(wine =>
              <div className="column is-one-third" key={wine._id}>
                <h4>{wine.name}</h4>
                <WineCard {...wine} />
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }


}

export default WinesIndex
