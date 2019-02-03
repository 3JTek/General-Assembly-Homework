import React from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'

import MessageForm from './components/MessageForm'
import MessageResponse from './components/MessageResponse'

class App extends React.Component{
  constructor(){
    super()

    this.state = {
      fieldsValue: {
        language: 'fr',
        text: 'How are you going Australia, how was your summer?',
        phone: '+33752755762'
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  sendTranslatedText(){
    axios.post('api/message', {
      message: this.state.fieldsValue.text,
      to: this.state.fieldsValue.phone,
      lang: this.state.fieldsValue.language
    })
      .then(res => this.setState({ translatedMessage: res.data.translatedMessage }))
  }

  handleChange({target: {name, value}}){
    this.setState({fieldsValue: {...this.state.fieldsValue, [name]: value }})
  }

  handleSubmit(e){
    e.preventDefault()
    return this.sendTranslatedText()
  }

  render(){
    return(
      <main>
        <h1>Send a translated to your friend</h1>
        <MessageForm
          {...this.state.fieldsValue}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <MessageResponse
          translatedMessage={this.state.translatedMessage}
        />
      </main>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))
