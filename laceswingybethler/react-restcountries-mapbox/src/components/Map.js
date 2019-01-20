import React from 'react'


import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = process.env.MAPBOX_TOKEN
import 'mapbox-gl/dist/mapbox-gl.css'

class Map extends React.Component {

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/satellite-v9',
      center: this.props.center,
      zoom: this.props.zoom
    })

    //FILTER COUNTRIES WITHOUT LOCATION DATA
    const filteredCountries = this.props.countries.filter(country => country.latlng.length === 2)


    //MARKERS FROM RESTCOUNTRIES API DATA
    filteredCountries.map(country => {

      //FIND PROPERTIES: FLAG, NAME, AND LATLONG
      const flag = country.flag
      const name = country.name
      const latitude = country.latlng[0]
      const longitude = country.latlng[1]
      console.log(flag, name , longitude, latitude)


      //put flag into DIV
      const flagMarker = document.createElement('div')
      flagMarker.className = 'flag-marker'
      flagMarker.innerText = name
      flagMarker.innerHTML = `<img src='${flag}' alt = '${name} flag' style='max-width: 55px' />`

      return new mapboxgl.Marker(flagMarker)
        .setLngLat({ lat: latitude, lng: longitude })
        .addTo(this.map)
    })

  }



  render() {
    return (
      //attach mapDiv to 'this' - the <App /> component
      <div className='map' ref={mapDiv => this.mapDiv = mapDiv} />
    )
  }
}

export default Map
