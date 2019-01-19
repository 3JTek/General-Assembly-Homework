/*eslint no-unused-vars: ["error", { "vars": "local" }]*/
/*global marker */
import React from 'react'
import mapboxgl from 'mapbox-gl'

class Map extends React.Component{

  constructor(){
    super()
    this.state = {
      countriesWithCoord: [],
      mapDOM: {}
    }
  }

  createMap(){
    //Create and Display MapBox
    mapboxgl.accessToken = process.env.MAPBOX_TOKEN
    return new mapboxgl.Map({
      container: this.mapDOMElement,
      style: this.props.mapOptions.style,
      zoom: this.props.mapOptions.zoom
    })
  }

  filterCountries(){
    // Remove countries that do not have coordinates
    return this.props.countries.filter(country => {
      return country.latlng.length === 2
    })
  }

  createMarkup(countriesWithCoord, mapDOM){
    countriesWithCoord.forEach(country => {
      //Create Popup
      const markerHeight = 15, markerRadius = 10, linearOffset = 25
      const popupOffsets = {
        'top': [0, 0],
        'top-left': [0,0],
        'top-right': [0,0],
        'bottom': [0, -markerHeight],
        'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
        'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
        'left': [markerRadius, (markerHeight - markerRadius) * -1],
        'right': [-markerRadius, (markerHeight - markerRadius) * -1]
      }
      const popup = new mapboxgl.Popup({offset: popupOffsets, closeOnClick: false, closeButton: false})
        .setHTML(country.name)
      //Create Marker and add Popup
      const markerDOM = document.createElement('img')
      markerDOM.setAttribute('src', `${country.flag}`)
      markerDOM.setAttribute('name', `${country.name}`)
      const marker = new mapboxgl.Marker(markerDOM)
        .setLngLat(country.latlng.reverse())
        .setPopup(popup)
        .addTo(mapDOM)
    })
  }

  componentDidMount(){
    const mapDOM = this.createMap()
    const countriesWithCoord = this.filterCountries()
    this.createMarkup(countriesWithCoord, mapDOM)
    //
    this.setState({mapDOM, countriesWithCoord })
  }

  render(){
    return(
      <div id='map' ref={element => this.mapDOMElement = element}/>
    )
  }
}

export default Map
