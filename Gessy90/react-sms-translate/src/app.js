import React from 'react'
import ReactDOM from 'react-dom'
import Form from './components/Form'
import axios from 'axios'

import 'bulma'
class App extends React.Component {
  constructor(){
    super()
    this.state= {}
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit= this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/message', this.state)
      .then(res => console.log(res))
  }


  handleChange({ target: {name, value} }){
    this.setState({ [name]: value })
  }

  render(){
    return (
      <Form
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
