import React from 'react'
import axios from 'axios'
import WineForm from './WineForm'

import Auth from '../../lib/Auth'

class WinesNew extends React.Component {
  constructor() {
    super()

    this.state ={
      data: {
        name: '',
        origin: '',
        image: '',
        tastingNotes: '',
        grape: '',
        location: {
          lat: '',
          lng: ''
        },
        abv: '',
        price: ''
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()

    axios
      .post('https://winebored.herokuapp.com/wines',
        this.state.data,
        { headers: {Authorization: `Bearer ${Auth.getToken()}`}})
      .then(() => this.props.history.push('/wines'))
      .catch(err => alert(err.message))
  }

  handleChange({ target: {name, value}}) {
    let data
    if(name==='lat'||name==='lng') {
      data = { ...this.state.data, location: { [name]: value } }
    } else{
      data = { ...this.state.data, [name]: value }
    }
    this.setState({data})
  }

  render() {
    return(
      <section className='section'>
        <div className='container'>
          <WineForm
            data={this.state.data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </section>
    )
  }
}

export default WinesNew
