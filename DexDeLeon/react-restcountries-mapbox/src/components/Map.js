import React from 'react'

import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = process.env.MAPBOX_TOKEN
import 'mapbox-gl/dist/mapbox-gl.css'

class Map extends React.Component {

  constructor(){
    super()

    this.map
  }

  componentDidMount(){
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v9',
      zoom: this.props.zoom,
      center: this.props.center
    })

    const filtered = this.props.countries.filter(country => country.latlng.length === 2)
    return filtered.map(country => {
      // Set a className for countries by replacing spaces in names with dashes and converting to lowercase
      const countryClass = `${country.name.toLowerCase().split(' ').join('-')}`
      const marker = document.createElement('div')
      marker.classList.add('marker', `${countryClass}`)
      marker.innerHTML = `<img src='${country.flag}' alt='Flag of ${country.name}'>`

      const popUp = new mapboxgl.Popup({offset: [0, -50], anchor: 'bottom'})
        .setHTML(`
            <h3>Country: ${country.name}</h3>
            <h3>Native Name: ${country.nativeName}</h3>
            <h4>Capital: ${country.capital}</h4>
            <h4>Population: ${country.population}</h4>

          `)

      const [ lat, lng ]  = country.latlng
      // Offset property moves the marker 50px up
      return new mapboxgl.Marker(marker, {offset: [0, -50]})
        .setLngLat([lng, lat])
        .setPopup(popUp)
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
