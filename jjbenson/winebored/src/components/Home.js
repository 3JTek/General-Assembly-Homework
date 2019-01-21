import React from 'react'

import Map from './Map'
import axios from 'axios'

class Home extends React.Component{

  constructor(){
    super()
    this.state = {}
  }

  componentDidMount(){
    axios.get('https://winebored.herokuapp.com/wines')
      .then((res)=>{
        this.setState({ wines: res.data})
      })
  }
  render(){
    if(!this.state.wines) return null
    return(
      <div className="homeComp">
        <section className="section">
          <div className="container">
            <h1 className="title is-1">Wine Bored</h1>
            <hr />
            <h2 className="title is-2">Welcome!</h2>
            <p>Wine Bored is the place for all the best wines and wine related things.</p>
          </div>
        </section>
        <Map className="homeMap"
          zoom="0"
          center={ {lng: 0, lat: 0} }
          wines={this.state.wines}
        />
      </div>
    )
  }
}

export default Home
