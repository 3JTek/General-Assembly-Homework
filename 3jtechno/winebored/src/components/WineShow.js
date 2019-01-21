import React from 'react'

import axios from 'axios'

import Map from './Map'

class WineShow extends React.Component{

  constructor(){
    super()
    this.state = {}
  }

  componentDidMount(){
    console.log(this.props)
    axios.get(`https://winebored.herokuapp.com/wines/${this.props.match.params.id}`)
      .then(res => this.setState({wine: res.data}))
      .catch(err => console.log(err.message))
  }

  render(){
    if(!this.state.wine) return false
    const {_id, name, image, origin, grape, price, tastingNotes, location} = this.state.wine
    return(
      <div key={_id}>
        <h1>{name}</h1>
        <img src={image}/>
        <p>{origin}</p>
        <p>{grape}</p>
        <p>{price}</p>
        <p>{tastingNotes}</p>
        <Map latlng={location}/>
      </div>
    )
  }
}

export default WineShow
