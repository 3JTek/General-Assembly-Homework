import React from 'react'
import axios from 'axios'

class WineShow extends React.Component {
  constructor(){
    super()
    this.state = {}
  }


  componentDidMount(){
    axios.get(`http://winebored.herokuapp.com/wines/${this.props.match.params.id}`)
      .then(res => this.setState({wines: res.data}))
  }

  render(){
    if(!this.state.wines) return null
    const {name, origin, image, tastingNotes} = this.state.wines

    return(
      <div>
        <h1>{name}</h1>
        <p>{origin}</p>
        <img src={image}/>
        <p>{tastingNotes}</p>

      </div>
    )
  }
}

export default WineShow
