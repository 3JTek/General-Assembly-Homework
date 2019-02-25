import React from 'react'
import ReactDOM from 'react-dom'
import Map from './components/Map'

import './scss/style.scss'
import 'mapbox-gl/dist/mapbox-gl.css'
import axios from 'axios'


class App extends React.Component {
  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(response => this.setState({countries: response.data}))
  }

  render() {

    if(!this.state) return null
    return (
      <main>
        <Map countries={this.state.countries} markers={this.state.countries}/>
      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
