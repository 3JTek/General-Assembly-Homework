import React from 'react'

import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = process.env.MAPBOX_TOKEN
import 'mapbox-gl/dist/mapbox-gl.css'

class Map extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  loadMap = mapEl => {
    if (!this.state.mapLoaded)
      this.setState({
        map: new mapboxgl.Map({
          container: mapEl,
          style: 'mapbox://styles/mapbox/streets-v9',
          center: this.props.center,
          zoom: this.props.zoom
        }),
        mapLoaded: true
      })

    this.props.markers.map(marker => {
      const markerElement = document.createElement('DIV')
      markerElement.className = 'custom-marker'
      markerElement.style.backgroundImage = `url(${marker.flag})`
      if (this.state.mapLoaded)
        return new mapboxgl.Marker(markerElement)
          .setLngLat({ lat: marker.lat, lng: marker.lng })
          .addTo(this.state.map)
    })
  }

  render() {
    return <div className="map" ref={el => this.loadMap(el)} />
  }
}

export default Map
