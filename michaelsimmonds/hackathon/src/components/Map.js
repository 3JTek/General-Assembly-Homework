import React from 'react'

import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken ='pk.eyJ1IjoibWljaGFlbDAwMTk5MjAwIiwiYSI6ImNqcjR5bWp6ZzFzeWQ0OXFxZ3F0a3E2Z3gifQ.r8PYkey-a6RVGHaECyp3AA'
import 'mapbox-gl/dist/mapbox-gl.css'

class Map extends React.Component {

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: this.props.center,
      zoom: this.props.zoom
    })

    const markerElement = document.createElement('div')
    markerElement.className = 'custom-marker'
    return new mapboxgl.Marker(markerElement)
      .setLngLat({ lat: this.props.markers.latitude, lng: this.props.markers.longitude})
      .addTo(this.map)
  }

  render() {
    return (
      <div className="map" ref={el => this.mapDiv = el}/>
    )
  }
}

export default Map
