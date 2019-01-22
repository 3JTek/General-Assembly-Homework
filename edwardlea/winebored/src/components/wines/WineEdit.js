import React from 'react'
import axios from 'axios'

import WinesForm from './WinesForm'

import Auth from '../../lib/Auth'

class WineEdit extends React.Component {
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

  componentDidMount() {
    axios
      .get(`https://winebored.herokuapp.com/wines/${this.props.match.params.id}`)
      .then(res => this.setState({data: res.data}))
  }

  handleChange({target: {name, value}}){
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state.data._id)
    console.log(this.state.data)
    console.log(Auth.getToken())
    axios
      .put(`https://winebored.herokuapp.com/wines/${this.state.data._id}`,
        this.state.data,
        {headers: {Authorization: `Bearer ${Auth.getToken()}`}})
      .then(() => this.props.history.push('/wines'))
      .catch((err) => alert(err.message))
  }

  render(){
    console.log(this.props)
    return(
      <WinesForm
        data={this.state.data}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        type="Edit"
      />
    )
  }
}

export default WineEdit
