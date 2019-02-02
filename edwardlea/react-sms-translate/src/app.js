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
      messageSent: false
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.resetForm = this.resetForm.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    axios.post('/api/message',{
      to: this.state.to,
      message: this.state.message,
      lang: this.state.lang
    })
      .then(() => this.setState({
        messageSent: true,
        composing: false,
        to: '',
        message: '',
        lang: ''
      }))
  }

  handleChange(e){
    e.preventDefault()
    const {name,value} = e.target
    this.setState({ [name]: value })
  }

  resetForm(){
    this.setState({messageSent: false, composing: true})
  }

  render(){
    return(
      <div className="container section">
        <h1 className="title is-1">Send your Translated Message!</h1>
        {(this.state.composing) &&
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          to={this.state.to}
          message={this.state.message}
          lang={this.state.lang}
        />}
        {this.state.messageSent &&
        <div>
          <p> {this.state.message}</p>
          <button className="button is-dark" onClick={this.resetForm} >
          Send another Message</button>
        </div>
        }

      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
