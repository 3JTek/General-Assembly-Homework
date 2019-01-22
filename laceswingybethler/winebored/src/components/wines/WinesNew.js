import React from 'react'
import axios from 'axios'

import Auth from '../../lib/Auth'
import CheeseForm from './CheeseForm'

class WinesNew extends React.Component {
  constructor() {
    super()

    this.state= {
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
    this.handleSubmit = this.handleChange.bind(this)
  }

  handleChange({ target: { name, value }}) {
    const data = {... this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios
      .post('https://winebored.herokuapp.com/wines', this.state.data, { headers: {Authorization: `Bearer ${Auth.getToken()}`
      }})
      .then(() => this.props.history.push('./wines'))
      .catch(err => alert(err.message))
  }



  render() {
    return(
      <main className="section">
        <div clasName="container">
          <CheeseForm
            data={this.state.data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit} />
        </div>
      </main>
    )
  }
}


export default WinesNew
