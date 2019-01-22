import React from 'react'
import axios from 'axios'

import WinesForm from './WinesForm'

import Auth from '../../lib/Auth'

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

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({target: {name, value}}){
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state.data)
    console.log(Auth.getToken())
    axios
      .post('https://winebored.herokuapp.com/wines',
        this.state.data,
        {headers: {Authorization: `Bearer ${Auth.getToken()}`}})
      .then(() => this.props.history.push('/wines'))
      .catch((err) => alert(err.message))
  }

  render(){
    return(
      <WinesForm
        data={this.state.data}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        type="New"
      />
    )
  }
}

export default WinesNew
