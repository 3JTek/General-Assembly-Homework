import React from 'react'


import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = process.env.MAPBOX_TOKEN


class Map extends React.Component {


  componentDidMount () {
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/outdoors-v10'
    })


    this.props.countries
      .filter(country => country.latlng.length === 2)
      .map(country => {
        return new mapboxgl.Marker()
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
