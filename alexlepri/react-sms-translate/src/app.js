import React from 'react'
import ReactDOM from 'react-dom'
import Form from './components/form'

import axios from 'axios'

import 'bulma'



class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange({ target: { value } }) {
    this.setState({ message: value })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({ message: null })
    axios.post('/api/message', {
      message: this.state.message,
      lang: 'it',
      to: '+447450643047'
    })

  }


  render() {
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
