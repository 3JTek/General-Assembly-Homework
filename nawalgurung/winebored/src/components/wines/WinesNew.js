import React from 'react'
import axios from 'axios'

//need Auth bc to add new wine you need to get user token
import Auth from '../../lib/Auth'

import WineForm from './WineForm'

class WinesNew extends React.Component {
  constructor(){
    super()

    this.state = {
      data: {
        name: '',
        origin: '',
        image: '',
        tastingNotes: ''
      }
    }
    //bind event listeners
    this.handleChange= this.handleChange.bind(this)
    this.handleSubmit= this.handleSubmit.bind(this)
  }

  //event listeners
  handleChange({ target: { name, value }}) {
    const data = {...this.state.data, [name]: value}
    this.setState({data})
  }

  handleSubmit(e) {
    e.preventDefault()

    axios
      .post('https://winebored.herokuapp.com/wines', this.state.data,
        { headers: { Authorization: `Bearer ${Auth.getToken()}`}})
      .then(() => this.props.history.push('/wines'))
      .catch(err => alert(err.message))
  }

  render() {    
    return (
      <main className="section">
        <div className="container">
          <WineForm
            data={this.state.data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </main>
    )
  }
}

export default WinesNew
