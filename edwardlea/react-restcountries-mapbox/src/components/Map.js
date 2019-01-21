import React from 'react'


import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = process.env.MAPBOX_TOKEN
import 'mapbox-gl/dist/mapbox-gl.css'

class Map extends React.Component {

  componentDidMount(){
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/light-v9',
      center: this.props.center,
      zoom: this.props.zoom

    })

    this.map.addControl(new mapboxgl.NavigationControl())
    this.map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    }))

    this.props.countries.filter(country => country.latlng.length === 2)
      .map(country =>{
        const popup = new mapboxgl.Popup({ offset: 25 })
          .setHTML(`
            <p> Name: ${country.name} </p>
            <p> Native Country:  ${country.nativeName} </p>
            `)

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
