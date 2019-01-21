import React from 'react'

import mapboxgl from 'mapbox-gl'

class Map extends React.Component{

  constructor(){
    super()
  }

  createMarkup(mapDOM){
    //Create Marker
    const {lat, lng} = this.props.latlng
    const markerDOM = document.createElement('div')
    markerDOM.setAttribute('class', 'marker')
    const marker = new mapboxgl.Marker(markerDOM)
      .setLngLat([lat, lng].reverse())
      .addTo(mapDOM)
  }

  createMap(){
    //Create and Display MapBox
    console.log(this.props);
    const {lat, lng} = this.props.latlng
    mapboxgl.accessToken = process.env.MAPBOX_TOKEN
    return new mapboxgl.Map({
      container: this.mapDOMElement,
      center: [lat, lng].reverse(),
      style: 'mapbox://styles/mapbox/streets-v9',
      zoom: 4
    })
  }

  componentDidMount(){
    const mapDOM = this.createMap()
    this.createMarkup(mapDOM)
    this.setState({mapDOM})
  }

  render(){
    return(
      <div id='map' ref={element => this.mapDOMElement = element}/>
    )
  }
}

export default Map
