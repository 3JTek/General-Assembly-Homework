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
    this.prop.map.country.map( country =>{
      const markerPopup = new mapboxgl.Popup({ offset: 25 }).setHTML(`<h3> ${country.name} </h3>`)
      // const markerElement = document.createElement('DIV')
      // markerElement.className = 'custom-marker'
      // _.filter(countries, (country) => countries.test(country.name)) //to filter countries???
      return new mapboxgl.Marker(markerPopup)

        .setLngLat({ lat: country.latlng[0], lng: country.latlng[1] })
        .setPopup(markerPopup)
    })
  }

  render() {
    return (
      <div className="map" ref={el => this.mapDiv = el} />
    )
  }
}

export default Map
