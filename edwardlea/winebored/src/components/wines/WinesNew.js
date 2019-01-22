import React from 'react'
import axios from 'axios'

import WinesForm from './WinesForm'

class WinesNew extends React.Component {
  constructor(){
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

  handleChange({target: { name, value }}) {
    const data = {...this.state.data, [name]: value}
    this.setState({data})
  }

  handleSubmit(e) {
    e.preventDefault()

  }


  render(){
    return(
      <WinesForm
        data={this.state.data}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }


}


export default WinesNew
