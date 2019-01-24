import React from 'react'

import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = process.env.MAPBOX_TOKEN
//import 'mapbox-gl/dist/mapbox-gl.css'

class Map extends React.Component {

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/dark-v9',
      center: this.props.center,
      zoom: this.props.zoom
    })

    this.props.events.map(event => {
      const latitude = event.venue.latitude
      console.log(latitude)
    })

  }


  render() {
    //console.log(this.props.events.results)


    return (
      <div className='map' ref={mapDiv => this.mapDiv = mapDiv} />
    )
  }
}

export default Map
