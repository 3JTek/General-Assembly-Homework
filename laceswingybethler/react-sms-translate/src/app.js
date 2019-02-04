import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import bulma from 'bulma'
import Form from './components/Form'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      message: 'Hello my little friend',
      lang: 'de',
      to: '+447870681920'
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleLangChange = this.handleLangChange.bind(this)
    this.handleNrChange = this.handleNrChange.bind(this)
  }

  handleNrChange(e) {
    const nr = e.target.value
    this.setState( { to: nr } )
  }

  handleTextChange(e) {
    const text = e.target.value
    this.setState( { message: text } )
  }

  handleLangChange(e) {
    const langCode = e.target.value
    console.log(langCode)
    this.setState( { lang: langCode } )
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.post('/api/message', {
      message: this.state.message,
      lang: this.state.lang,
      to: this.state.to
    })
      .then(()=>console.log('All done'))
  }


  render() {
    console.log('render is called')

    return (
      <main>
        <div className="container section">
          <h2 className="title is-2">SMS Translation</h2>
          <div>{this.state.message}</div>
          <div>{this.state.lang}</div>
          <div>{this.state.to}</div>
          <Form
            handleSubmit={this.handleSubmit}
            handleTextChange={this.handleTextChange}
            handleLangChange={this.handleLangChange}
            handleNrChange={this.handleNrChange}
          />
        </div>
      </main>
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
