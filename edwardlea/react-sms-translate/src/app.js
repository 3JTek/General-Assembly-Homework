import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import 'bulma'

class App extends React.Component {
  constructor(){
    super()

    this.state = {

    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(){
    axios.post('/api/message',
      {
        to: '447818401423',
        message: 'Hello',
        lang: 'fr'
      })
      .then(res => console.log(res))
  }

  render(){
    return(
      <div className="container section">
        <h1 className="title is-1">Send your Translated Message!</h1>

      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
