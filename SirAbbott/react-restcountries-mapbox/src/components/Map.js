import React from 'react'

import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = process.env.MAPBOX_TOKEN

import 'mapbox-gl/dist/mapbox-gl.css'

class Map extends React.Component {
  constructor(){
    super()
    this.preDiv = React.createRef()
  } 

  componentDidMount(){
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/outdoors-v10',
      zoom: this.props.zoom,
      center: this.props.center
    })
    const filteredCountries = this.props.countries.filter( country => country.latlng.length === 2)
    for (let i = 0; i < filteredCountries.length; i++) {
      const flagMarkers = document.createElement('DIV')
      flagMarkers.className = 'flag-marker'
      flagMarkers.style.backgroundImage = `url('${filteredCountries[i].flag}')`
      new mapboxgl.Marker(flagMarkers)
        .setLngLat({ lat: filteredCountries[i].latlng[0], lon: filteredCountries[i].latlng[1] })
        .addTo(this.map)
    }

    const info = this.preDiv.current
    console.log(info)
    this.map.on('mousemove', function (e) {
      info.innerHTML =
        // e.point is the x, y coordinates of the mousemove event relative
        // to the top-left corner of the map
        JSON.stringify(e.point) + '<br />' +
        // e.lngLat is the longitude, latitude geographical position of the event
        JSON.stringify(e.lngLat)
    })
  }

  render() {
    return (
      <div>
        <div className='map' ref={el => this.mapDiv = el} />
        <pre id='info' ref={this.preDiv}></pre>
      </div>
    )
  }
}
export default Map
