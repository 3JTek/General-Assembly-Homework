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
    // this.props.markers.map(marker => {
    //   const markerElement = document.createElement('DIV')
    //   const nBikes = marker.additionalProperties.find(property =>  property.key === 'NbBikes').value
    //   const filteredArr =
    //   markerElement.className ='custom-marker'
    //   markerElement.textContent=nBikes
    //
    //   return new mapboxgl.Marker(markerElement)
    //     .setLngLat({lat: marker.lat, lng: marker.lon})
    //     .addTo(this.map)
    // })
  }
  render(){
    return(
      <div className="map" ref={el => this.mapDiv = el}/>
    )
  }

  //United States Minor Outlying Islands ,
  //  <div>
  //   {this.props.country.filter(country => country.location.length !== 0).map((country, index) => <p key={index}> {country.name} | {country.location[0]}, {country.location[1]} </p>)}
  // </div>

}

export default Map
