import React from 'react'
import mapboxgl from 'mapbox-gl'

class Map extends React.Component{

  constructor(){
    super()
    this.countriesWithCoord
  }

  componentDidMount(){
    const {mapDisplay, countries} = this.props
    mapboxgl.accessToken = process.env.MAPBOX_TOKEN
    const map = new mapboxgl.Map({
      container: this.mapDOMElement,
      style: mapDisplay.style,
      zoom: mapDisplay.zoom
    })
    console.log('before funciton');

    // Remove countries that do not have coordinates
    this.countriesWithCoord = countries.filter(country => {
      return country.latlng.length === 2
    })
    //Create Markup on the Map
    console.log(this.countriesWithCoord)
    console.log('after funciton');

    this.countriesWithCoord.forEach(country => {
      const markerDOM = document.createElement('div')
      markerDOM.style.backgroundImage = `url(${country.flag})`
      const marker = new mapboxgl.Marker(markerDOM)
        .setLngLat(country.latlng.reverse())
        .addTo(map)
    })
  }

  render(){

    return(
      <div id='map' ref={element => this.mapDOMElement = element}/>
    )
  }
}

export default Map
