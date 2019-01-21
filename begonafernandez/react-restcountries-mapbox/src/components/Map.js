import React from 'react'
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = process.env.MAPBOX_TOKEN
import 'mapbox-gl/dist/mapbox-gl.css'

class Map extends React.Component {
  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v9',
      zoom: 2
    })


    const countriesWithLatLong = this.props.markers.filter(country => country.latlng.length > 0)
    countriesWithLatLong.forEach(country => {
      const markerElement = document.createElement('DIV')
      markerElement.className = 'flag'
      markerElement.style.backgroundImage = 'url(' + country.flag +')'
      markerElement.style.backgroundPosition = 'center'
      markerElement.style.backgroundSize = 'contain'
      markerElement.style.backgroundRepeat = 'no-repeat'

      const popup = new mapboxgl.Popup()
        .setText(country.name)

      return new mapboxgl.Marker(markerElement)
        .setLngLat({lat: country.latlng[0], lng: country.latlng[1]})
        .setPopup(popup)
        .addTo(this.map)
    })
  }

  render() {
    return(
      <div className="map" ref={mapDiv => this.mapDiv = mapDiv} />
    )
  }
}
export default Map
