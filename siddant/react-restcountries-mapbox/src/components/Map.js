import React from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
mapboxgl.accessToken = process.env.MAPBOX_TOKEN

class Map extends React.Component{
  componentDidMount(){
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: {lng: -0, lat: 0},
      zoom: 1
    })

    this.props.country.filter(country => country.location.length !== 0)
      .map(country => {
        const markerElement = document.createElement('DIV')
        markerElement.className ='custom-marker'
        markerElement.style.backgroundImage = `url(${country.flag})`
        markerElement.style.backgroundSize = 'contain'
        markerElement.style.backgroundRepeat = 'no-repeat'
        markerElement.addEventListener('click',()=>{
          this.map.flyTo({
            center: {lat: country.location[0], lng: country.location[1]},
            zoom: 5
          })
        })
        return new mapboxgl.Marker(markerElement)
          .setLngLat({lat: country.location[0], lng: country.location[1]})
          .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(`
                      <img src="${country.flag}" alt="${country.name}"  height="50" width="70">
                      <h3>${country.name}</h3>
                      <p>${country.nativeName}</p>
                      <p>population: ${country.population}</p>
                    `))
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



,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
          'client': 'EDUC_4',
          'Authorization': 'Basic RURVQ180OjZxRkJtdmxrTDN6RA==',
          'x-api-key': 'MFRqjbphK01Ti2gXLI0dE2iebhWHAMZHa0Kb11Dp',
          'api-version': 'v102'
        }
