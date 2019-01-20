import React from 'react'

import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = process.env.MAPBOX_TOKEN
import 'mapbox-gl/dist/mapbox-gl.css'

class Map extends React.Component {

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: this.props.center,
      zoom: this.props.zoom
    })

    this.props.markers.map(marker => {
      if (marker.latlng.length === 2) {
        const markerElement = document.createElement('DIV')
        markerElement.className = 'custom-marker'
        markerElement.style.backgroundImage = `url(${marker.flag})`
        markerElement.style.backgroundSize = 'contain'
        markerElement.style.backgroundRepeat = 'no-repeat'
        markerElement.src = marker.flag


        return new mapboxgl.Marker(markerElement)
          .setLngLat({ lat: marker.latlng[0], lng: marker.latlng[1]})
          .setPopup(new mapboxgl.Popup({ offset: 25 })
            .setHTML(`<h3>${marker.name}</h3><p>${marker.nativeName}</p>`))
          .addTo(this.map)
      }
    })
  }

  render() {
    console.log(this.props.markers[0].latlng)
    return (
      <div className="map" ref={el => this.mapDiv = el}/>  //this is shorthad for <div><div/>. this is javascript, not html
    )
  }
}

export default Map
