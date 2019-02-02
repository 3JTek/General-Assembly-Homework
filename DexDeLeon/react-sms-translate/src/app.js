import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import './style.scss'

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      message: ''
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

  changeHandler({ target: { value } }){
    this.setState({ message: value })
  }

  submitHandler(e){
    e.preventDefault()
    console.log(this.state.message)
  }

  render(){
    return (
      <div>
        <h1>React SMS</h1>
        <form onSubmit={this.submitHandler}>
          <input
            value={this.state.message}
            onChange={this.changeHandler}
          />
          <button>Send Message</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
