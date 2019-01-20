import React from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'

import './scss/style.scss'

import Map from './components/Map'

class App extends React.Component {

  componentDidMount(){
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(countries => this.setState({ countries: countries.data }))
  }

  render() {
    if (!this.state) return null
    return (
      <Map
        zoom={1.25}
        center={{lat: 12.8797, lng: 121.7740}}
        countries={this.state.countries}
      />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
