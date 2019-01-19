import React from 'react'
import ReactDOM from 'react-dom'

import Map from './components/Map'

import axios from 'axios'

import 'mapbox-gl/dist/mapbox-gl.css'
import './scss/style.scss'

class App extends React.Component {

  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(res => this.setState(res.data))
  }

  render() {
    if (!this.state) return null
    return (
      <Map />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
