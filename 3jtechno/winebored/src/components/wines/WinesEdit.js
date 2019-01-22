import React from 'react'

import axios from 'axios'

import Auth from '../../lib/Auth'
import WineForm from './WineForm'

class WinesEdit extends React.Component{
  constructor(){
    super()
    this.id = ''
    this.state = {
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
    this.handleDelete = this.handleDelete.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    axios.get(`https://winebored.herokuapp.com/wines/${this.props.match.params.id}`)
      .then(res => this.setState({data: {...res.data}}))
  }


  handleChange({target: {name, value}}){
    if(name === 'lat' || name === 'lng'){
      console.log(this.state.data.location)
    } else {
      this.setState({data: {...this.state.data, [name]: value}})
    }
  }

  handleSubmit(e){
    e.preventDefault()
    axios.put(`https://winebored.herokuapp.com/wines/${this.props.match.params.id}`,
      this.state.data,
      {headers: {'Authorization': `Bearer ${Auth.getToken()}`}})
      .then(() => {
        this.props.history.push('/wines')
      })
      .catch(err => console.log(err.message))
  }

  handleDelete(){
    axios.delete(`https://winebored.herokuapp.com/wines/${this.id}`,
      {headers: {'Authorization': `Bearer ${Auth.getToken()}`}})
      .then(() => {
        this.props.history.push('/wines')
      })
      .catch(err => console.log(err.message))
  }

  render(){
    return(
      <WineForm data = {this.state.data}  handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleDelete={this.handleDelete}/>
    )
  }
}

export default WinesEdit
