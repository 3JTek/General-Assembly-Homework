import React from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'

import './scss/style.scss'

import Map from './components/Map'

class App extends React.Component {

  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(countries => this.setState({ countries: countries.data }))
  }

  render() {
    if(!this.state) return null
    console.log(this.state.points[0])
    return (
      <main>
        <Map
          center={{ lat: 45.0, lng: 118.0 }}
          zoom={1.5}
          countries={this.state.countries}
        />
      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
