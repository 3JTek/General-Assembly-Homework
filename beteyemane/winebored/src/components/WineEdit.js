import React from 'react'
import axios from 'axios'

import Auth from '../lib/Auth'

import WineForm from './WineForm'

class WineEdit extends React.Component {
  constructor(props) {
    super(props)
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

  formToEdit() {
    axios
      .get(`https://winebored.herokuapp.com/wines/${this.props.match.params.id}`, this.state.data)
    console.log(this.props.match.params.id)
      .then(res => {
        this.setState({name: res.data.name})
      })
  }

  handleChange({target: {name, value}}) {
    const data = {...this.state.data, [name]: value}
    this.setState({data})
  }

  handleSubmit(e) {
    e.preventDefault()
    axios
      .post('https://winebored.herokuapp.com/wines',
        this.state.data,
        { headers: {Authorization: `Bearer ${Auth.getToken()}`}})
      .then(() => this.props.history.push('/wines'))
      .catch(err => alert(err.message))
  }

  render() {
    return(
      <main className="section">
        <div className="container">
          <WineForm
            data={this.state.data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}/>
        </div>
      </main>
    )
  }
}
export default WineEdit
