import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import 'bulma'

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      to: null,
      message: null,
      lang: null
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    axios.post('/api/message',
      {
        to: this.state.to,
        message: this.state.message,
        lang: this.state.lang
      })
      .then(res => console.log(res))
  }

  handleChange(e){
    e.preventDefault()
    const {name,value} = e.target
    console.log(name, value)
    this.setState({ [name]: value })
  }

  render(){
    return(
      <div className="container section">
        <h1 className="title is-1">Send your Translated Message!</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">To</label>
            <div className="control">
              <input className="input" onChange={this.handleChange} value={this.state.to} name="to" type="text" placeholder="Telephone Number" />
            </div>
          </div>

          <div className="field">
            <label className="label">Language</label>
            <div className="control">
              <input className="input" onChange={this.handleChange} value={this.state.lang} name="lang" type="text" placeholder="Language" />
            </div>
          </div>


          <div className="field">
            <label className="label">Message</label>
            <textarea className="textarea" name="message" onChange={this.handleChange} value={this.state.message} placeholder="e.g. Hello world"></textarea>
          </div>

          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
        </form>

      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
