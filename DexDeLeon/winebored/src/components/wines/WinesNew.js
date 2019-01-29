import React from 'react'
import axios from 'axios'

import WineForm from './WineForm'
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

  handleSubmit(e){
    e.preventDefault()

    axios.post('https://winebored.herokuapp.com/wines',
      this.state.data,
      { headers: { Authorization: `Bearer ${Auth.getToken()}`} }
    )
      .then(() => this.props.history.push('/wines'))
      .catch(error => alert(error))
  }

  handleChange({ target: { name, value } }){
    const data = {...this.state.data, [name]: value }
    this.setState({ data })
  }

  render(){
    return (
      <main className="section">
        <div className="container">
          <WineForm
            data={this.state.data}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
        </div>
      </main>
    )
  }

}

export default WinesNew
