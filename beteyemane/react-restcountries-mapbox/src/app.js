import React from 'react'
import ReactDOM from 'react-dom'

import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = process.env.mapboxToken 
import 'mapbox-gl/dist/mapbox-gl.css'

import './scss/style.scss'


class App extends React.Component {
  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v9'
    })

  }
  render() {
    return (
      <div className="map" ref={el => this.mapDiv = el}/>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
