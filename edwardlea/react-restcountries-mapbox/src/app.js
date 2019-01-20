import React from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'

import Map from './components/Map'

import './scss/style.scss'

import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = process.env.MAPBOX_TOKEN
import 'mapbox-gl/dist/mapbox-gl.css'


class App extends React.Component {

  componentDidMount(){
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(res => {
        console.log(res.data)
        const countries = res.data.map(country => {
          return {
            latlng: country.latlng,
            flag: country.flag,
            name: name,
            nativeName: country.nativeName
          }
        })
        console.log(countries)
        this.setState({countries})
      })

  }

  render() {
    if(!this.state) return null
    return (
      <main>
        
      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
