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
      lang: 'fr',
      to: '+447576424204'
    })
      .then(res => console.log(res))
  }

  handleChange({ target: { value } }) {
    this.setState({ message: value })
  }


  render() {
    console.log(this.state.message)
    console.log(this.state)
    return(
      <main>
        <h1> React SMS Homework </h1>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Enter Message" onChange={this.handleChange}>
          </input>
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
