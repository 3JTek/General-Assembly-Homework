import React from 'react'


import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = process.env.MAPBOX_TOKEN


class Map extends React.Component {

  componentDidMount () {
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/satellite-v9'
    })

  }

  render () {
    return (
      <div className="map" ref={mapDiv => this.mapDiv = mapDiv} />
    )
  }
}

export default Map
