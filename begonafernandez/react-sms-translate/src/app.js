import React from 'react'
import ReactDOM from 'react-dom'
// import axios from 'axios'
import 'bulma'
import axios from 'axios'

import Hero from './components/Hero'
import LanguageField from './components/LanguageField'

class App extends React.Component{
  constructor() {
    super()

    this.state = {
      data: {
        message: '',
        to: '',
        lang: ''
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange({target: {name, value}}) {
    const data = {...this.state.data, [name]: value}
    this.setState({data})
  }

  handleClick({ target: { name, value } }) {
    const data = {...this.state.data, [name]: value}
    this.setState({data})
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.post('/api/message', {
      message: this.state.data.message, to: this.state.data.to, lang: this.state.data.lang
    })

  }

  render() {
    return(
      <main>
        <Hero />
        <div className="section">
          <div className="container">
            <form onSubmit={this.handleSubmit}>
              <div className="field">
                <label className="label">Phone Number</label>
                <div className="control">
                  <input
                    name="to"
                    className="input"
                    type="text"
                    placeholder="Telephone number e.g +440988674543"
                    value={this.state.data.to}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Text message</label>
                <div className="control">
                  <input
                    name="message"
                    className="input"
                    type="text"
                    placeholder="Write the text you want translated here"
                    value={this.state.data.message}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <LanguageField handleClick={this.handleClick}/>
              <button className="button is-primary">Submit</button>
            </form>
          </div>
        </div>
      </main>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
