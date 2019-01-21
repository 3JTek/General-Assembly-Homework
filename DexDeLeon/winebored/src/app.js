import React from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'

import 'bulma'
import './style.scss'

class App extends React.Component {
  constructor(){
    super()

    this.state = {}
  }

  componentDidMount(){
    axios.get('https://winebored.herokuapp.com/wines')
      .then(res => this.setState({ wines: res.data }))
  }

  render() {
    return (
      <header>
        <h1 className="title is-1">WineBored</h1>
      </header>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
