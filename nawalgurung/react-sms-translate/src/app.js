import React from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'

import 'bulma'

import Form from './components/Form'

class App extends React.Component {
  constructor() {
    super()

    this.state = {}

    // this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // handleChange({ target: { value } }) {
  //   this.setState({ nextCity: value })
  // }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({ data: null })
    axios.get('/api/message', {
      params: { message: this.state.nextCity }
    })
      .then(res => this.setState({ message: res.data }))
  }

  render() {

    console.log(this.state)
    return (
      <div className="section">
        <div className="container">
          <Form
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
