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
      if(country.latlng.length !== 0)
        return true
    })
    console.log(updatedCountries)
  }

  render() {
    return(
      <div className="map" ref={el => this.mapDiv = el}/>

    )
  }

}
export default Map
