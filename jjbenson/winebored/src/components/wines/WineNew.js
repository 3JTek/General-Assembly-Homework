import React from 'react'
import axios from 'axios'

import Auth from '../../lib/Auth'

import WineForm from './WineForm'

class WineNew extends React.Component{
  constructor(){
    super()

    this.state = {
      data: {
        name: '',
        origin: '',
        image: '',
        tastingNotes: '',
        grape: '',
        lat: '',
        lng: '',
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

  handleChange({ target: { name, value }}){
    let data
    if(name==='lat'||name==='lng') {
      const location = {...this.state.data.location, [name]: value}
      data = { ...this.state.data, location }
    }else{
      data = { ...this.state.data, [name]: value }
    }
    this.setState({ data })
  }

  handleSubmit(e){
    e.preventDefault()
    console.log(this.state.data)
    axios
      .post('https://winebored.herokuapp.com/wines',
        this.state.data,
        { headers: { Authorization: `Bearer ${ Auth.getToken() }` } } )
      .then( (res) => {
        console.log(res)
        this.props.history.push(`/wines/${res.data._id}`)
      })
      .catch( (err) => alert(err.message))
  }

  render(){
    return(
      <section className="section">
        <div className="container">
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

export default WineNew
