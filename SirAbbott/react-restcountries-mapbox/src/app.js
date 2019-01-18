import React from 'react'
import ReactDOM from 'react-dom'

import './scss/style.scss'
import axios from 'axios'

import Map from './components/Map'

import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = process.env.MAPBOX_TOKEN

import 'mapbox-gl/dist/mapbox-gl.css'

class App extends React.Component {

  componentDidMount(){
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v9'
    })
  }

  render() {
    return (
      <div className='map' ref={el => this.mapDiv = el}/>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
