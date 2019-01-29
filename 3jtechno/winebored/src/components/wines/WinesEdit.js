import React from 'react'

import axios from 'axios'

import Auth from '../../lib/Auth'
import WineForm from './WineForm'

class WinesEdit extends React.Component{
  constructor(){
    super()
    this.state = {
      errors: {},
      data: {
        name: '',
        image: '',
        abv: '',
        origin: '',
        grape: '',
        price: '',
        tastingNotes: '',
        location: {
          lat: '',
          lng: ''
        }
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    axios.get(`https://winebored.herokuapp.com/wines/${this.props.match.params.id}`)
      .then(res => this.setState({data: {...res.data}}))
  }

  handleChange({target: {name, value}}){
    if(name === 'lat' || name === 'lng'){
      const location = {...this.state.data.location, [name]: value}
      const data = {...this.state.data, location }
      this.setState({data})
    } else {
      this.setState({data: {...this.state.data, [name]: value}})
    }
  }

  handleSubmit(e){
    e.preventDefault()
    axios.put(`https://winebored.herokuapp.com/wines/${this.props.match.params.id}`,
      this.state.data,
      {headers: {'Authorization': `Bearer ${Auth.getToken()}`}})
      .then(() => this.props.history.push('/wines'))
      .catch(err => this.setState({errors: err.message}))
  }

  render(){
    return(
      <section className="section">
        <div className="container">
          <div className="title is-1">Edit</div>
          <WineForm
            data={this.state.data}
            errors={this.state.errors}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleDelete={this.handleDelete}/>
        </div>
      </section>
    )
  }
}

export default WinesEdit
