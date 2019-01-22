import React from 'react'
import axios from 'axios'

import Auth from '../../lib/Auth'
import WineForm from './WineForm.js'


class WineEdit extends React.Component{
  constructor(){
    super()

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  componentDidMount(){
    this.setState({ data: this.props.location.state.data })
  }

  handleChange({ target: { name, value } }){
    const data= {...this.state.data, [name]:value }
    this.setState({ data })
  }

  handleSubmit(e){
    e.preventDefault()

    axios
      .put(`https://winebored.herokuapp.com/wines/${this.state.data._id}`,
          this.state.data,
          { headers: { Authorization: `Bearer ${Auth.getToken()}` }})
      .then(() => this.props.history.push('/wines'))
      .catch(err => alert(err))
  }

  render(){
    if(!this.state) return null
    console.log(this.state.data)
    return(
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

export default WineEdit
