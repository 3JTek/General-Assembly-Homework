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

    new mapboxgl.Marker()
      .setLngLat(this.props.center)
      .addTo(this.map)

  }


  render() {
    return (
      <div className="map column" ref={el => this.mapDiv = el} />
    )
  }

}

export default Map
