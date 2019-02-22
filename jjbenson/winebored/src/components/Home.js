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
        // console.log(res.data)
        const wines = res.data.filter((wine)=> {
          if(!wine.location) return false
          if(!wine.location.lat) return false
          if(!wine.location.lng) return false
          return true
        })
        this.setState({ wines })
      })
      .catch((err)=>console.log(err.message))
  }
  render(){
    if(!this.state.wines) return null
    // console.log(this.state.wines)
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
          zoom="0.7"
          center={ {lng: 60, lat: 10} }
          wines={this.state.wines}
          clickable="true"
        />
      </div>
    )
  }
}

export default Home
