import React from 'react'
import axios from 'axios'

class RestaurantsShow extends React.Component {
  constructor(){
    super()

    this.state = {

    }
  }

  componentDidMount() {
    console.log('Hello')
    axios.get(`/api/restaurants/${this.props.match.params.id}`)
      .then(res => this.setState({ restaurant: res.data }))
  }

  render(){
    if(!this.state.restaurant) return null
    const {  name, chef , cuisine, address   } = this.state.restaurant
    return (
      <section className="section">
        <div className="container">
          <h1 className="title is-1"> {name} </h1>
          <h4 className="title is-4">Chef: {chef.name}</h4>
          <hr />
          <h4 className="title is-4">Cuisine: {cuisine}</h4>
          <h4 className="title is-4">Address: {address}</h4>
          <hr />

        </div>
      </section>
    )
  }
}

export default RestaurantsShow
