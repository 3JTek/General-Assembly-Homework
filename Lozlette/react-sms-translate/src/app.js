import React from 'react'
import ReactDOM from 'react-dom'

import Form from './components/Form'
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super()

    this.state = {}


    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { value } }) {
    this.setState({ to: value, text: value, lang: value })
    console.log(this.state)
  }

  handleSubmit(e){
    e.preventDefault()
    console.log(this.state)
    axios.get('/api/message')
      .then(res => this.setState({ to: res.data, lang: this.state.lang, text: this.state.text }))
  }

  render(){
    return (
      <Form handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
