import React from 'react'


import mapboxgl from 'mapbox-gl'

import 'mapbox-gl/dist/mapbox-gl.css'

mapboxgl.accessToken = process.env.MAPBOX_TOKEN


class Map extends React.Component {

  componentDidMount() {

    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v9',
      zoom: this.props.zoom,
      center: this.props.center

    })
  }

  render () {
    return (
      <div className="map" ref={mapDiv => this.mapDiv = mapDiv} />
    )
  }
}

export default Map
