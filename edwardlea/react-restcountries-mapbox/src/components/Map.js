import React from 'react'


import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = process.env.MAPBOX_TOKEN
import 'mapbox-gl/dist/mapbox-gl.css'

class Map extends React.Component {

  componentDidMount(){
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: this.props.center,
      zoom: this.props.zoom
    })

    this.props.countries.filter(country => country.latlng.length === 2)
      .map(country =>{
        const popup = new mapboxgl.Popup({ offset: 25 })
          .setText(`Native Country Name: ${country.nativeName}`)

        const marker = document.createElement('img')
        marker.setAttribute('src', country.flag)
        marker.className ='marker'

        return new mapboxgl.Marker(marker)
          .setLngLat([country.latlng[1], country.latlng[0]])
          .addTo(this.map)
          .setPopup(popup)
      })
  }

  render() {
    return (
      <div className="map" ref={el => this.mapDiv = el}>
      </div>
    )
  }
}

export default Map
