import React from 'react'
import axios from 'axios'

import WineForm from './WineForm'
import Auth from '../../lib/Auth'

class WinesEdit extends React.Component {
  constructor(){
    super()

    this.state = {
      data: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    axios.get(`https://winebored.herokuapp.com/wines/${this.props.match.params.id}`)
      .then(res => this.setState({ data: res.data }))
      .catch(error => alert(error))
  }

  handleSubmit(e){
    e.preventDefault()

    axios.put(`https://winebored.herokuapp.com/wines/${this.state.data._id}`,
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

export default WinesEdit
