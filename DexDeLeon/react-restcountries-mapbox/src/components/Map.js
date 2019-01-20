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
    console.log(filtered.map(country => country.latlng))
    return filtered.map(country => {
      const marker = document.createElement('div')
      marker.className = 'marker'

      const [ lat, lng ]  = country.latlng
      return new mapboxgl.Marker()
        .setLngLat([lng, lat])
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
