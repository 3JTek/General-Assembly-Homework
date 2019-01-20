import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import './scss/style.scss'

import Map from './components/Map'

class App extends React.Component {
  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2/all').then(res => {
      const allCountries = res.data
        .filter(country => country.latlng && country.latlng.length > 0)
        .map(country => {
          country.lat = country.latlng[0]
          country.lng = country.latlng[1]
          return country
        })
      this.setState({ points: allCountries })
    })
  }

  render() {
    if (!this.state) return null
    console.log('this state points', this.state.points)
    return (
      <main>
        <Map
          center={{ lat: 51.5, lng: -0.007 }}
          zoom={2}
          markers={this.state.points}
        />
      </main>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
