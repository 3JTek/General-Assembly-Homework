import React from 'react'
import axios from 'axios'

import Auth from '../../lib/Auth'

import WineForm from './WineForm'

class WineEdit extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        name: '',
        origin: '',
        image: '',
        tastingNotes: '',
        grape: '',
        price: '',
        abv: ''
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    axios.get(`https://winebored.herokuapp.com/wines/${this.props.match.params.id}`)
      .then(res => this.setState({ data: res.data }))
  }


  handleChange({ target: { name,value } }) {
    const data = {...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios
      .put(`https://winebored.herokuapp.com/wines/${this.state.data._id}`,
        this.state.data,
        { headers: { Authorization: `Bearer ${Auth.getToken()}`}})
      .then(() => this.props.history.push('/wines'))
      .catch(err => alert(err.message))
  }

  render() {
    return(
      <main className="section">
        <div className="container">
          <WineForm
            type="Edit Wine"
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
