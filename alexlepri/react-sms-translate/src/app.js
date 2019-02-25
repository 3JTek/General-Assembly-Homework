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

  handleChange({ target: { name, value } }) {
    this.setState({ [ name ]: value })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/message', {
      message: this.state.message,
      lang: this.state.lang,
      to: '+447450643047'
    })
    this.setState({ message: null })

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
