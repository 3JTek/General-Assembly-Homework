import React from 'react'

import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = process.env.mapboxToken
import 'mapbox-gl/dist/mapbox-gl.css'

class Map extends React.Component {
  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v9'
    })

    const updatedCountries = this.props.countries.filter(function(country) {
      if(country.latlng.length === 2) return true

    })

    updatedCountries.map(marker => {
      const markerElement = document.createElement('DIV')
      markerElement.className = 'custom-marker'
      return new mapboxgl.Marker(markerElement)
        .setLngLat({ lat: marker.latlng[0], lng: marker.latlng[1]})
        .addTo(this.map)
    })
  }


  render() {
    return(
      <div className="map" ref={el => this.mapDiv = el}/>

    )
  }

}
export default Map
