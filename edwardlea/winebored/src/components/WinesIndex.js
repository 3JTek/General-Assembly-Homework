import React from 'react'
import axios from 'axios'

class WinesIndex extends React.Component {
  constructor(){
    super()

    this.state = {
      wines: []
    }
  }

  componentDidMount(){

  }

  render(){

    return (
      <h1> Wines Index</h1>

    )
  }


}

export default WinesIndex
