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
      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`<h3>${marker.name}</h3><h4>${marker.nativeName}`)
      const flags = document.createElement('DIV')
      flags.className = 'custom-marker'
      flags.style.backgroundImage = marker.flag
      // console.log(marker.alpha3Code.toLowerCase())
      console.log(marker)
      return new mapboxgl.Marker(flags)
        .setLngLat({ lat: marker.latlng[0], lng: marker.latlng[1]})
        .addTo(this.map)
        .setPopup(popup)
    })
  }

  render() {
    return(
      <main>
        <div className="map" ref={el => this.mapDiv = el}/>
      </main>
    )
  }

}
export default Map
