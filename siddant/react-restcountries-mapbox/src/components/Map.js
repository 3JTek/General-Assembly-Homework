import React from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
mapboxgl.accessToken = process.env.MAPBOX_TOKEN

class Map extends React.Component{
  componentDidMount(){
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: {lng: -0.118092, lat: 51.509865},
      zoom: 5
    })
    this.props.country.filter(country => country.location.length !== 0)
      .map(country => {
        const markerElement = document.createElement('DIV')
        markerElement.className ='custom-marker'
        markerElement.style.backgroundImage = `url(${country.flag})`
        markerElement.style.backgroundSize = 'contain'
        markerElement.style.backgroundRepeat = 'no-repeat'
        return new mapboxgl.Marker(markerElement)
          .setLngLat({lat: country.location[0], lng: country.location[1]})
          .addTo(this.map)
      })

  }
  render(){
    return(
      <div className="map" ref={el => this.mapDiv = el}/>
    )
  }

  //United States Minor Outlying Islands ,


}

export default Map
