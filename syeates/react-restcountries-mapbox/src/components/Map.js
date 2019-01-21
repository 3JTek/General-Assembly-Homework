import React from 'react'

import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = process.env.MAPBOX_TOKEN
import 'mapbox-gl/dist/mapbox-gl.css'

class Map extends React.Component {

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/outdoors-v11',
      center: this.props.center,
      zoom: this.props.zoom
    })

    const filtered = this.props.countries.filter(country => country.latlng.length === 2)

    filtered.map(country => {
      const flagElement = country.flag
      const latitude = country.latlng[0]
      const longitude = country.latlng[1]

      return new mapboxgl.Marker(flagElement)
        .setLngLat([longitude.lon, latitude.lat])
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
