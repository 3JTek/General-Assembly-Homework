import React from 'react'
import ReactDOM from 'react-dom'

import Form from './components/Form'
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super()

    this.state = {}


    this.handleToChange = this.handleToChange.bind(this)
    this.handleLangChange = this.handleLangChange.bind(this)
    this.handleMessageChange = this.handleMessageChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleToChange({ target: { value } }) {
    this.setState({ to: value })
    console.log(this.state)
  }

  handleLangChange( { target: { value }}){
    this.setState({ lang: value })
    console.log(this.state)
  }

  handleMessageChange( { target: { value }}){
    this.setState({ message: value })
    console.log(this.state)
  }

  handleSubmit(e){
    e.preventDefault()
    axios.post('/api/message',{ params: {
      to: this.state.to,
      message: this.state.message,
      lang: this.state.lang
    }
    })
  }

  render(){
    return (
      <Form handleToChange={this.handleToChange}
        handleLangChange={this.handleLangChange}
        handleMessageChange={this.handleMessageChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
