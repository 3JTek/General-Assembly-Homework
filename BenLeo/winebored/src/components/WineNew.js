import React from 'react'
import axios from 'axios'

import Auth from '../lib/Auth'

class WineNew extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        name: '',
        origin: '',
        image: '',
        tastingNotes: '',
        grape: '',
        abv: '',
        price: ''
      }
    }
  }
  render() {
    return(
      <h1>New Wine Page</h1>
    )
  }
}

export default WineNew
