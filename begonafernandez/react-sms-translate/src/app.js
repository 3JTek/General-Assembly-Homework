import React from 'react'
import ReactDOM from 'react-dom'
// import axios from 'axios'
import 'bulma'
import './style.scss'
import axios from 'axios'


import Hero from './components/Hero'
import LanguageField from './components/LanguageField'
import TextField from './components/TextField'
import PhoneField from './components/PhoneField'
import Footer from './components/Footer'
import Successful from './components/Successful'

class App extends React.Component{
  constructor() {
    super()

    this.state = {
      data: {
        message: '',
        to: '',
        lang: ''
      },
      submitted: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange({target: {name, value}}) {
    const data = {...this.state.data, [name]: value}
    this.setState({data, submitted: false})
  }

  handleClick({ target: { name, value } }) {
    const data = {...this.state.data, [name]: value}
    this.setState({data, submitted: false})
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.post('/api/message', {
      message: this.state.data.message, to: this.state.data.to, lang: this.state.data.lang
    })

    this.setState({submitted: true})
  }

  render() {
    return(
      <main>
        <Hero />
        <div className="section">
          <div className="container">
            <form onSubmit={this.handleSubmit}>
              <PhoneField value={this.state.data.to} handleChange={this.handleChange}/>
              <TextField value={this.state.data.message} handleChange={this.handleChange}/>
              <LanguageField handleClick={this.handleClick}/>
              <div className="has-text-centered">
                <button className="button is-primary submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
        <Successful submitted={this.state.submitted}/>
        <Footer />
      </main>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
