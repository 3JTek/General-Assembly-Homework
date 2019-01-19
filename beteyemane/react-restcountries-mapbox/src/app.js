import React from 'react'
import ReactDOM from 'react-dom'
import Map from './components/Map'

import './scss/style.scss'
import 'mapbox-gl/dist/mapbox-gl.css'
import axios from 'axios'


class App extends React.Component {
  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(data => console.log(data))
  }

  render() {
    return (
      <main>
        <Map />
      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
