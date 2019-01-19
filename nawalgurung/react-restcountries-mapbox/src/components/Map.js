import React from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

mapboxgl.accessToken = process.env.MAPBOX_TOKEN

class Map extends React.Component {

  componentDidMount(){
    console.log(this.props.countries)

    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v9'
    })

    const filteredCountry = this.props.countries.filter(country => country.latlng.length !== 0)
    console.log(filteredCountry)

    filteredCountry.map(country =>{
      // console.log(country.flag)
      const flagElement = document.createElement('IMG')
      flagElement.className = 'custom-marker'
      flagElement.src = country.flag

      return new mapboxgl.Marker(flagElement)

        .setLngLat({ lat: country.latlng[0], lng: country.latlng[1] })
        .addTo(this.map)
    })
  }



  render() {
    return (
      // render div map bc mapBox needs vanilla JS
      // ref function return vanilla div into this.map so its available on other scope
      <div className="map" ref={el => this.mapDiv = el}/>
    )
  }
}

export default Map
