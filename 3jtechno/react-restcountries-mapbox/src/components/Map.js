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
    this.triggerPopup = this.triggerPopup.bind(this)
  }

  createMap(){
    //Create and Display MapBox
    const {mapDisplay} = this.props
    mapboxgl.accessToken = process.env.MAPBOX_TOKEN
    return new mapboxgl.Map({
      container: this.mapDOMElement,
      style: mapDisplay.style,
      zoom: mapDisplay.zoom
    })
  }

  filterCountries(){
    // Remove countries that do not have coordinates
    const {countries} = this.props
    return countries.filter(country => {
      return country.latlng.length === 2
    })
  }

  createMarkup(countriesWithCoord, mapDOM){
    //Create Markup on the Map
    countriesWithCoord.forEach(country => {
      if(country.name === 'France'){
        const markerDOM = document.createElement('img')
        markerDOM.setAttribute('src', `${country.flag}`)
        markerDOM.setAttribute('name', `${country.name}`)
        markerDOM.setAttribute('onClick')
        const marker = new mapboxgl.Marker(markerDOM)
          .setLngLat(country.latlng.reverse())
          .addTo(mapDOM)
      }
    })
  }

  componentDidMount(){
    const mapDOM = this.createMap()
    const countriesWithCoord = this.filterCountries()
    this.createMarkup(countriesWithCoord, mapDOM)
    //
    // const imgDOM = Array.from(document.querySelectorAll('img'))
    // imgDOM.forEach(img => img.addEventListener('click', this.triggerPopup))
    this.setState({mapDOM, countriesWithCoord })
  }

  triggerPopup(e){
    console.log(e);
    const countryName = e.target.attributes.name.value
    const indexCountry = this.state.countriesWithCoord.findIndex(country => country.name === countryName)
    const latlng = this.state.countriesWithCoord[indexCountry].latlng
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
      .setLngLat(latlng)
      .setHTML(countryName)
      .addTo(this.state.mapDOM)
  }


  render(){
    return(
      <div id='map' ref={element => this.mapDOMElement = element}/>
    )
  }
}

export default Map
