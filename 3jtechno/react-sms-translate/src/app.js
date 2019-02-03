import React from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'

class App extends React.Component{
  constructor(){
    super()

    this.state = {
      language: 'fr',
      text: 'How are you going Australia, how was your summer?',
      phone: '+33752755762'
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  sendTranslatedText(){
    axios.post('api/message', {
      message: this.state.text,
      to: this.state.phone,
      lang: this.state.language
    })
      .then(res => this.setState({ translatedMessage: res.data.translatedMessage }))
  }

  handleChange({target: {name, value}}){
    this.setState({[name]: value})
  }

  handleSubmit(e){
    e.preventDefault()
    return this.sendTranslatedText()
  }

  render(){
    return(
      <main>
        <h1>Send a translated to your friend</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            name="text"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <input
            name="phone"
            onChange={this.handleChange}
            value={this.state.phone}
          />
          <input
            name="language"
            onChange={this.handleChange}
            value={this.state.language}
          />
          <button>Submit</button>
        </form>
        <p>{this.state.translatedMessage && `${this.state.translatedMessage} ✅`} </p>
      </main>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))
