import React from 'react'

import axios from 'axios'

class WineShow extends React.Component{

  componentDidMount(){
    console.log(this.props)
    axios.get(`https://winebored.herokuapp.com/wines/${this.props.match.params.id}`)
      .then(res => this.setState({wine: res.data}))
      .catch(err => console.log(err.message))
  }

  render(){
    if(!this.state) return false
    const {_id, name, image, origin, grape} = this.state.wine
    return(
      <div key={_id}>
        <h1>{name}</h1>
        <img src={image}/>
        <p>{origin}</p>
        <p>{grape}</p>
      </div>
    )
  }
}

export default WineShow
