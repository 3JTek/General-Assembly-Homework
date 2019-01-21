/*eslint no-unused-vars: ["error", { "vars": "local" }]*/
/*global marker */
import React from 'react'
import mapboxgl from 'mapbox-gl'

class Map extends React.Component{

  constructor(){
    super()
    this.state = {
      mapDOM: {}
    }
  }

  createMap(){
    //Create and Display MapBox
    mapboxgl.accessToken = process.env.MAPBOX_TOKEN
    return new mapboxgl.Map({
      container: this.mapDOMElement,
      center: this.props.mapOptions.defaultCenter,
      style: this.props.mapOptions.style,
      zoom: this.props.mapOptions.zoom
    })
  }

  filterImages(){
    // Remove countries that do not have coordinates
    return this.props.images.filter(image => {
      return image.location.length !== null
    })
  }

  createMarkup(imagesWithCoord, mapDOM){
    imagesWithCoord.forEach(image => {
      //Create Popup
      const markerHeight = 75, markerRadius = 10, linearOffset = 25
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
      const popup = new mapboxgl.Popup({offset: popupOffsets, closeOnClick: true, closeButton: false})
        .setHTML(image.location.name)
      //Create Marker and add Popup
      const markerDOM = document.createElement('img')
      markerDOM.setAttribute('src', `${image.images.low_resolution.url}`)
      markerDOM.setAttribute('name', `${image.location.name}`)
      const marker = new mapboxgl.Marker(markerDOM)
        .setLngLat([image.location.latitude, image.location.longitude].reverse())
        .setPopup(popup)
        .addTo(mapDOM)
    })
  }

  componentDidMount(){
    const mapDOM = this.createMap()
    const imagesWithCoord = this.filterImages()
    this.createMarkup(imagesWithCoord, mapDOM)
    //
    this.setState({mapDOM, imagesWithCoord })
  }

  render(){
    return(
      <div id='map' ref={element => this.mapDOMElement = element}/>
    )
  }
}

export default Map
