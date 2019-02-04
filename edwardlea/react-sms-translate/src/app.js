import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import 'bulma'

import Form from './components/form'

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      to: '',
      message: '',
      lang: '',
      composing: true,
      messageSent: false,
      messageSending: false
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.resetForm = this.resetForm.bind(this)
  }

  handleSubmit(e){
    this.setState({messageSending: true})
    e.preventDefault()
    axios.post('/api/message',{
      to: this.state.to,
      message: this.state.message,
      lang: this.state.lang
    })
      .then(() => this.setState({
        messageSent: true,
        composing: false,
        messageSending: false
      }))
      .catch((err) => console.log(err.error))
  }

  handleChange({target: {name, value}}){
    this.setState({ [name]: value })
  }

  resetForm(){
    this.setState({
      messageSent: false,
      composing: true,
      to: '',
      message: '',
      lang: ''
    })
  }

  render(){
    return(
      <div className="container section">
        <h1 className="title is-1">Send your Translated Message!</h1>
        {this.state.messageSending && (
          <h2 className="title is-2">Message sending...</h2>
        )}
        {(this.state.composing && !this.state.messageSending) &&
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          to={this.state.to}
          message={this.state.message}
          lang={this.state.lang}
        />}
        {this.state.messageSent &&
        <div>
          <h4 className="title is-4">Message Sent: {this.state.message}</h4>
          <button className="button is-dark" onClick={this.resetForm} >
          Send another Message</button>
        </div>}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
