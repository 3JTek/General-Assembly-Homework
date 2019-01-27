import React from 'react'

import axios from 'axios'

import Auth from '../../lib/Auth'
import WineForm from './WineForm'

class WinesNew extends React.Component{
  constructor(){
    super()
    this.state = {
      data: {
        name: '',
        image: '',
        abv: '',
        origin: '',
        grape: '',
        price: '',
        tastingNotes: '',
        location: []
      },
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({target: {name, value}}){
    this.setState({data: {...this.state.data, [name]: value}})
  }

  handleSubmit(e){
    e.preventDefault()

    axios.post('https://winebored.herokuapp.com/wines',
      this.state.data,
      {headers: {'Authorization': `Bearer ${Auth.getToken()}`}})
      .then(() => {
        this.props.history.push('/wines')
      })
      .catch(err => {
        // console.dir(err)
        this.setState({errors: err.response.data.errors})
      } )
  }

  render(){
    return(
      <section className="section">
        <div className="container">
          <div className="title is-1">New Wine</div>
          <WineForm
            data = {this.state.data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            errors={this.state.errors}
          />
        </div>
      </section>
    )
  }
}

export default WinesNew
