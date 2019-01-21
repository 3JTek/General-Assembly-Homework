import React from 'react'

import mapboxgl from 'mapbox-gl'

import 'mapbox-gl/dist/mapbox-gl.css'

mapboxgl.accessToken = process.env.MAPBOX_TOKEN


class Map extends React.Component {


  //When component mounts
  componentDidMount(){

    //Get variables
    const {zoom, location} = this.props

    //Create a new map
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: location,
      zoom: zoom
    })

    //Add the marker
    return new mapboxgl.Marker()
      .setLngLat(location)
      .addTo(this.map)

  }


  render() {
    console.log(this.props)
    return (
      <div className='map' ref={el => this.mapDiv = el}></div>
    )
  }
}

export default Map
