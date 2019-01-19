import React from 'react'
import ReactDOM from 'react-dom'

import Map from './components/Map'

import axios from 'axios'

import 'mapbox-gl/dist/mapbox-gl.css'
import './scss/style.scss'

class App extends React.Component {

  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2/all?fields=name;latlng')
      // .then(res => this.filterCountries(res))
      .then(res => this.filterCountries(res))
  }


  filterCountries(res) {
    const filteredArr = res.data.filter(country => country.latlng.length > 0)
    this.setState({countries: filteredArr})
  }

  render() {
    if (!this.state) return null
    return (
      <Map
        countries={this.state.countries}
      />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
