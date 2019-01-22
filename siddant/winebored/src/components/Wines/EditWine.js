import React from 'react'
import axios from 'axios'
import WinesForm from './WinesForm'

import Auth from '../../lib/Auth'

class EditWine extends React.Component {

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
    //this.handleChange = this.handleChange.bind(this)
    //this.handleSubmit = this.handleSubmit.bind(this)
  }

  // handleChange({target: {name, value}}){
  //   const data = {...this.state.data, [name]: value}
  //   this.setState({data})
  // }
  //
  // handleSubmit(e){
  //   e.preventDefault()
  //   //http://winebored.herokuapp.com/register
  //   console.log(this.state.data)
  //   axios
  //     .post('http://winebored.herokuapp.com/wines', this.state.data,
  //       {
  //         headers: { Authorization: `Bearer ${Auth.getToken()}`}
  //       }
  //     )
  //     .then(() => this.props.history.push('/wines'))
  //     .catch(err => console.log(err))
  // }

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

export default EditWine
