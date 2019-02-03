import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import 'bulma'
import './style.scss'

import Form from './components/Form'
import Loading from './components/Loading'

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      message: '',
      lang: '',
      phone: '',
      flag: '',
      langs: {},
      button: 'Send',
      status: 'info'
    }

    this.changeHandler = this.changeHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }

  componentDidMount(){
    axios.get('https://translate.yandex.net/api/v1.5/tr.json/getLangs', {
      params: {
        key: process.env.YANDEX_KEY,
        ui: 'en'
      }
    })
      .then(res => this.setState({ langs: res.data.langs }))
      .catch(err => console.error(err.message))
  }

  changeHandler({ target: { name, value } }){
    this.setState({ [name]: value })
  }

  colorButton(text, color){
    this.setState({ button: text, status: color })
    setTimeout(() => {
      this.setState({ button: 'Send', status: 'info' })
    }, 1500)
  }

  submitHandler(e){
    e.preventDefault()
    if(this.state.message !== '' &&
    this.state.lang !== '' &&
    this.state.phone !== '') {
      this.setState({ button: 'Sending...' })
      axios.post('/api/message', {
        message: this.state.message,
        lang: this.state.lang.split(',')[0],
        to: this.state.phone
      })
        .then(res => {
          this.colorButton(res.data.message, 'success')
        })
        .catch(err => {
          console.error(err.message)
          this.colorButton('Failed', 'danger')
        })
    }
  }

  render(){
    return (
      <div>
        <h1 className="title is-1 has-text-centered">React SMS Translator</h1>
        {Object.keys(this.state.langs).length === 0 && <Loading />}
        {Object.keys(this.state.langs).length > 0 &&
          <Form
            submitHandler={this.submitHandler}
            changeHandler={this.changeHandler}
            message={this.state.message}
            langs={this.state.langs}
            phone={this.state.phone}
            button={this.state.button}
            status={this.state.status}
          />
        }
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
