import React from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'

import 'mapbox-gl/dist/mapbox-gl.css'
import './scss/style.scss'

class App extends React.Component {

  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(res => this.setState(res.data))
  }

  render() {
    return (
      <h1>Hello World!</h1>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
