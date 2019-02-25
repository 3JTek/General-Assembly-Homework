import React from 'react'

import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
mapboxgl.accessToken = process.env.MAPBOX_KEY

class Map extends React.Component{

  componentDidMount(){
    const coords = this.props.location.state.coords
    console.log(coords)
    const image = this.props.location.state.image

    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [coords.lng, coords.lat],
      zoom: 1
    })

    // place wine marker
     const img = document.createElement('img')
     img.src = `${image}`

     return new mapboxgl.Marker(img)
       .setLngLat({ lat: coords.lat, lng: coords.lng })
       .addTo(this.map)

  }







  render(){
    if(!this.props) return null
    console.log('RAN MAP')
    return(
      <div className="map" ref={el => this.mapDiv = el}/>
    )
  }
}

export default Map
