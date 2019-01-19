import React from 'react'

import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = 'pk.eyJ1IjoiYmVubGVvIiwiYSI6ImNqcjIzYWJ0ZTAyYmk0MnAxYjFtaHV6MXYifQ.6PPOSsg4A4NXOz9WWEbsXA'

import 'mapbox-gl/dist/mapbox-gl.css'

class Map extends React.Component {

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v9'
    })

    this.props.countries.map(country => {
      return new mapboxgl.Marker()
        .setLngLat({lat: country.latlng[0], lng: country.latlng[1]})
        .addTo(this.map)
    })
  }

  render() {
    console.log(this.props.countries)
    return (
      <div className="map" ref={el => this.mapDiv = el} />
    )
  }
}

export default Map
