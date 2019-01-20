import React from 'react'


import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = process.env.MAPBOX_TOKEN


class Map extends React.Component {


  componentDidMount () {
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/satellite-v9',
      zoom: this.props.zoom
    })


    const filtered = this.props.countries
      .filter(country => country.latlng.length === 2)
    filtered.map(country => {

      const flag = country.flag

      const flagMarker = document.createElement('div')
      flagMarker.className = 'flag-marker'
      flagMarker.innerHTML = `<img src='${flag}' style='width: 30px' />`


      return new mapboxgl.Marker(flagMarker)
        .setLngLat({ lat: country.latlng[0], lng: country.latlng[1] })
        .addTo(this.map)
    })

  }

  render () {
    return (
      <div className="map" ref={mapDiv => this.mapDiv = mapDiv} />
    )
  }
}

export default Map
