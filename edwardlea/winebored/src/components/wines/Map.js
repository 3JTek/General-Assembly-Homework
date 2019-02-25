import React from 'react'

import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = process.env.MAPBOX_TOKEN
import 'mapbox-gl/dist/mapbox-gl.css'

class Map extends React.Component {
  componentDidMount(){
    if(!this.props.location) return null
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/light-v9',
      center: this.props.location,
      zoom: this.props.zoom
    })
    return new mapboxgl.Marker()
      .setLngLat([this.props.location.lng, this.props.location.lat])
      .addTo(this.map)
  }

  render() {
    return (
      <div className="map" ref={el => this.mapDiv = el}>
      </div>
    )
  }
}

export default Map
