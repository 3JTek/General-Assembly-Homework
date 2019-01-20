import React from 'react'

import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = process.env.MAPBOX_TOKEN

import 'mapbox-gl/dist/mapbox-gl.css'

class Map extends React.Component {
  componentDidMount(){
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v9',
      zoom: this.props.zoom,
      center: this.props.center
    })
    const filteredCountries = this.props.countries.filter( country => country.latlng.length === 2)
    for (let i = 0; i < filteredCountries.length; i++) {
      const flagMarkers = document.createElement('DIV')
      flagMarkers.className = 'flag-marker'
      console.log(filteredCountries[i].flag)
      flagMarkers.style.backgroundImage = `url('${filteredCountries[i].flag}')`
      new mapboxgl.Marker(flagMarkers)
        .setLngLat({ lat: filteredCountries[i].latlng[0], lon: filteredCountries[i].latlng[1] })
        .addTo(this.map)
    }
  }

  render() {
    return (
      <div className='map' ref={el => this.mapDiv = el}/>
    )
  }
}
export default Map
