import React from 'react'
import mapboxgl from 'mapbox-gl'

class Map extends React.Component{

  componentDidMount(){
    const {style, zoom} = this.props
    mapboxgl.accessToken = process.env.MAPBOX_TOKEN
    const map = new mapboxgl.Map({
      container: this.mapDOMElement,
      style: style,
      zoom: zoom
    })
  }

  render(){
    return(
      <div id='map' ref={element => this.mapDOMElement = element}/>
    )
  }
}

export default Map
