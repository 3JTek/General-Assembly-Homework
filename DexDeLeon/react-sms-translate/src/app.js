import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import 'bulma'
import './style.scss'

import Form from './components/Form'

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      message: '',
      lang: '',
      langs: {}
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

  submitHandler(e){
    e.preventDefault()
    console.log(this.state.message, this.state.lang)
  }

  render(){
    return (
      <div>
        <h1 className="title is-1">React SMS</h1>
        <Form
          submitHandler={this.submitHandler}
          changeHandler={this.changeHandler}
          message={this.state.message}
          langs={this.state.langs}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
