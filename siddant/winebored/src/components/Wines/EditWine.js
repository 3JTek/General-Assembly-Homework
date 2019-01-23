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
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount(){
    axios.get(`http://winebored.herokuapp.com/wines/${this.props.match.params.id}`)
      .then(res => this.setState({data: res.data}))
  }

  handleChange({target: {name, value}}){
    const data = {...this.state.data, [name]: value}
    this.setState({ data })
  }

  handleSubmit(e){
    e.preventDefault()
    console.log(this.state.data)
    axios
      .put(`http://winebored.herokuapp.com/wines/${this.props.match.params.id}`, this.state.data,
        {
          headers: { Authorization: `Bearer ${Auth.getToken()}`}
        }
      )
      .then(() => this.props.history.push('/wines'))
      .catch(err => alert(err.message))
  }

  render(){
    return(
      <WinesForm
        data={this.state.data}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        header="Edit Wines"
      />
    )
  }
}

export default EditWine
