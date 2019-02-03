import React from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'

class App extends React.Component {
  constructor() {
    super()
    this.state = {}

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/message', {
      message: this.state.message,
      lang: this.state.lang,
      to: '+447576424204'
    })
      .then(res => console.log(res))
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value })
  }

  render() {
    console.log(this.state.message)
    return(
      <main>
        <h1> React SMS Homework </h1>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Enter Message" name="message" onChange={this.handleChange}>
          </input>
          <input placeholder="Enter Language" name="lang" onChange={this.handleChange}>
          </input>
          <select>
            <option>
            </option>
          </select>
          <button>Press Me</button>
        </form>
      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
