import React from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'
import 'bulma'
import './style.scss'

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
    console.log(this.state.languages)
    return(
      <main>
        <section className="section">
          <div className="container">
            <form onSubmit={this.handleSubmit}>
              <div className="columns is-multiline is-centered">
                <div className ="column is-narrow">
                  <input className="input is-rounded is-small" placeholder="Enter Message" name="message" onChange={this.handleChange}>
                  </input>
                  <div className ="column select is-multiple is-small">
                    <select name="lang" onChange={this.handleChange}>
                      {Object.keys(this.state.languages).map(langCode =>
                        <option key={langCode} value={langCode}> {this.state.languages[langCode]} </option>
                      )}
                    </select>
                    <div className ="column">
                      <button className="button is-small">Send Message</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
