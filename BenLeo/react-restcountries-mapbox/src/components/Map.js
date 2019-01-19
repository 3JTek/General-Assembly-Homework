import React from 'react'

import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = process.env.MAPBOX_TOKEN

import 'mapbox-gl/dist/mapbox-gl.css'

class Map extends React.Component {

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v9'
    })

    this.props.countries.map(country => {

      const markerElement = document.createElement('DIV')
      markerElement.className = 'custom-marker'
      markerElement.style.backgroundImage = 'url(' + country.flag + ')'

      return new mapboxgl.Marker(markerElement)
        .setLngLat({lat: country.latlng[0], lng: country.latlng[1]})
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
