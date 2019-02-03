import React from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'

class App extends React.Component {
  constructor() {
    super()
    this.state = {}

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    // this.getLang = this.getLang.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/message', {
      message: this.state.message,
      lang: this.state.lang,
      to: '+447576424204'
    })
      .then(res => console.log(res))
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value })
  }

  componentDidMount() {
    axios.get('https://translate.yandex.net/api/v1.5/tr.json/getLangs', {
      params: {
        key: 'trnsl.1.1.20190202T152254Z.ca72f47331120192.c315e231da72f4034363101bb6238c8f5f4a95e1',
        ui: 'en'
      }
    })
      .then(res => this.setState({ languages: res.data.langs }))
  }

  render() {
    if(!this.state.languages) return null
    return(
      <main>
        <h1> React SMS Homework </h1>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Enter Message" name="message" onChange={this.handleChange}>
          </input>
          <select name="lang" onChange={this.handleChange}>
            {Object.keys(this.state.languages).map(langCode =>
              <option key={langCode} value={langCode}> {this.state.languages[langCode]} </option>
            )}
          </select>
          <button>Send Message</button>
        </form>
      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
