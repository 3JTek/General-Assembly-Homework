import React from 'react'

import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = 'pk.eyJ1IjoidGhlb2JpcmNoIiwiYSI6ImNqcjY4ZzRpaDEzMzYzeXRnaDAwanY4M2kifQ.qPRSOdFwuQsp5X1QkTPHeg'

import 'mapbox-gl/dist/mapbox-gl.css'

class Map extends React.Component {
  componentDidMount() {
    new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: this.props.location,
      zoom: 14
    })
  }


  render() {
    if(!this.props) return null
    return (
      <div className="map" ref={el => this.mapDiv = el} />
    )
  }
}

export default Map
