import React from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'

class App extends React.Component{
  constructor() {
    super()

    this.state = {}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const key = e.target.name
    const value = e.target.value
    this.setState({ [key]: value })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({ responseMessage: null })
    axios.post('/api/message', {
      params: {
        to: this.state.to,
        message: this.state.message,
        lang: this.state.lang
      }
    })
      //Placeholder response, to be replaced with dyanmic response once working
      .then(() => this.setState({ reponseMessage: 'Translation succesful. Message sent' }))
      .catch((err) => console.log(err))
  }

  render() {
    return(
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <input
            name="to"
            placeholder="Recipient's Telephone Number (include country code, eg +44)"
            onChange={this.handleChange}
          />
          <input
            name="message"
            placeholder="Message to be translated"
            onChange={this.handleChange}
          />
          <input
            name="lang"
            placeholder="Language to translate to"
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
        <p>{this.state.responseMessage}</p>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
