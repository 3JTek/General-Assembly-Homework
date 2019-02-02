import React from 'react'
import ReactDOM from 'react-dom'
// import axios from 'axios'
import 'bulma'
import axios from 'axios'


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

    this.handChange = this.handChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handChange({target: {name, value}}) {
    const data = {...this.state.data, [name]: value}
    this.setState({data})
  }

  handleClick({ target: { value } }) {
    this.setState({lang: value})
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
        <section className="hero is-dark">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-1">The SMS translater</h1>
              <p>Want to send a message to a friend that speaks another language?</p>
              <p>Let us help</p>
            </div>
          </div>
        </section>
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
                    onChange={this.handChange}
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
                    onChange={this.handChange}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Language</label>
                <div className="columns">
                  <div className="column">
                    <button
                      type="button"
                      name="lang"
                      value="es"
                      className="button"
                      onClick={this.handChange}
                    >Spanish</button>
                  </div>
                  <div className="column">
                    <button
                      type="button"
                      name="lang"
                      value="fr"
                      className="button"
                      onClick={this.handChange}
                    >French</button>
                  </div>
                  <div className="column">
                    <button
                      type="button"
                      name="lang"
                      value="el"
                      className="button"
                      onClick={this.handChange}
                    >Greek</button>
                  </div>
                  <div className="column">
                    <button
                      type="button"
                      name="lang"
                      value="he"
                      className="button"
                      onClick={this.handChange}
                    >Hebrew</button>
                  </div>
                  <div className="column">
                    <button
                      type="button"
                      name="lang"
                      value="it"
                      className="button"
                      onClick={this.handChange}
                    >Italian</button>
                  </div>
                </div>
              </div>
              <button className="button is-primary">Submit</button>
            </form>
          </div>
        </div>
      </main>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
