import React from 'react'

import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = process.env.MAPBOX_TOKEN
import 'mapbox-gl/dist/mapbox-gl.css'

class Map extends React.Component {

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: this.props.center,
      zoom: this.props.zoom
    })

    this.props.markers.map(marker => {
      const nbBikes = marker.additionalProperties.find(property => property.key === 'NbBikes').value
      const markerElement = document.createElement('DIV')
      markerElement.className = 'custom-marker'
      markerElement.textContent = nbBikes

      return new mapboxgl.Marker(markerElement)
        .setLngLat([marker.lon, marker.lat])
        .addTo(this.map)
    })
  }

  render() {
    return (
      <div className="map" ref={el => this.mapDiv = el} />
    )
  }
}

export default Map
