import React from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'



class App extends React.Componet {
  consctructor() {
    super()

    this.state = {
      message: 'Ciao World'
    }
  }

  render() {
    return (
      <h1>Hello World </h1>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
