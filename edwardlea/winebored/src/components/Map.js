import React from 'react'

import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = 'pk.eyJ1IjoiZWR3YXJkbGVhIiwiYSI6ImNqcjIzOXFsNDExYXo0MnBjZzBseGgxdzYifQ.AGIM9iitZP-chE8MpoKCkw'
import 'mapbox-gl/dist/mapbox-gl.css'

class Map extends React.Component {
  componentDidMount(){
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
