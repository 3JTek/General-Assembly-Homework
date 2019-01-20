import React from 'react'

import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
mapboxgl.accessToken = process.env.MAPBOX_TOKEN

class Map extends React.Component{

  componentDidMount(){
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v9'
    })


    this.props.countries.filter(country => country.latlng.length > 1 ).map(country => {
          const img = document.createElement('img');
          img.src = `${country.flag}`

            return new mapboxgl.Marker(img)
            .setLngLat({ lat: country.latlng[0], lng: country.latlng[1] })
            .addTo(this.map)
          })




  }



  render(){
    console.log(this.props)
    return(
      <div className="map" ref={el => this.mapDiv = el}/>
    )
  }
}

export default Map
