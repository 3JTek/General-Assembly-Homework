import React from 'react'

import axios from 'axios'

class WineShow extends React.Component {
  constructor() {
    super()

    this.state= {}
  }
  componentDidMount() {
    axios.get(`https://winebored.herokuapp.com/wines/${this.props.match.params.id}`)
      .then(res => this.setState({wines: res.data}))
  }

  render() {
    if(!this.state.wines) return null
    const { _id, name, origin, image, tastingNotes, grape, abv, price, user } = this.state.wines
  }
}

export default WineShow
