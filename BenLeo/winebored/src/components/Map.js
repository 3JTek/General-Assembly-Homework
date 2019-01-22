import React from 'react'

import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = 'pk.eyJ1IjoiYmVubGVvIiwiYSI6ImNqcjIzYWJ0ZTAyYmk0MnAxYjFtaHV6MXYifQ.6PPOSsg4A4NXOz9WWEbsXA'

import 'mapbox-gl/dist/mapbox-gl.css'

class Map extends React.Component {

  render() {
    const mapDiv = document.querySelector('.map')
    if(!this.props) return null
    return (
      new mapboxgl.Map({
        container: mapDiv,
        style: 'mapbox://styles/mapbox/streets-v9',
        //Placeholder Lat Long until Map works
        center: { lat: 51.512, lng: -0.0785 },
        zoom: 14
      })
    )
  }
}

export default Map
