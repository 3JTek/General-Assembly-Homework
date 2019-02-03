import React from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'
import 'bulma'
import './style.scss'

import Form from './components/Form'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      to: '',
      lang: '',
      message: '',
      langs: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.post('/api/message', {
      message: this.state.message,
      lang: this.state.lang,
      to: this.state.to
    })
      .then(res => console.log(res))
  }

  componentDidMount() {
    axios.get('https://translate.yandex.net/api/v1.5/tr.json/getLangs?key=trnsl.1.1.20190202T152254Z.ca72f47331120192.c315e231da72f4034363101bb6238c8f5f4a95e1&ui=en')
      .then(res => this.setState({ langs: res.data.langs}))
  }

  render() {

    console.log(this.state)
    return (

      <div>
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          langsArray={this.state.langs}
        />
      </div>

    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
