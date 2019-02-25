import React from 'react'
import axios from 'axios'

import RestaurantCard from './RestaurantCard'


class RestaurantsIndex extends React.Component {
  constructor(){
    super()

    this.state = {
      restaurants: []
    }
  }

  componentDidMount() {
    axios.get('/api/restaurants')
      .then(res => this.setState({ restaurants: res.data }))
  }

  render(){
    if(!this.state.restaurants) return null
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.restaurants.map(restaurant =>
              <div className="column is-one-quarter" key={restaurant._id}>
                <RestaurantCard {...restaurant} />
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default RestaurantsIndex
