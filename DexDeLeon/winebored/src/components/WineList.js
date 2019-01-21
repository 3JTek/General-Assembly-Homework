import React from 'react'

import axios from 'axios'

class WineList extends React.Component {

  constructor(){
    super()

    this.state = {
      wines: []
    }
  }

  componentDidMount(){
    axios.get('https://winebored.herokuapp.com/wines')
      .then(res => this.setState({ wines: res.data }))
      .catch(error => console.error('ERROR', error))
  }

  render(){
    return null
  }

}

export default WineList
