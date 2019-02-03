import React from 'react'
import ReactDOM from 'react-dom'

import Form from './components/Form'
import Header from './components/Header'
import axios from 'axios'
import './style.css'

import 'bulma'

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
  }

  handleLangChange( { target: { value }}){
    this.setState({ lang: value })
  }

  handleMessageChange( { target: { value }}){
    this.setState({ message: value })
    console.log(this.state)
  }

  handleSubmit(e){
    e.preventDefault()
    axios.post('/api/message', this.state)
  }

  render(){
    return (
      <div>
        <Header />
        <Form handleToChange={this.handleToChange}
          handleLangChange={this.handleLangChange}
          handleMessageChange={this.handleMessageChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
