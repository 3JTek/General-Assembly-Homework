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
      const flagElement = document.createElement('DIV')
      flagElement.className = 'custom-marker'
      flagElement.style.backgroundImage = `url(${country.flag})`
      flagElement.style.backgroundSize = 'contain'
      flagElement.style.backgroundRepeat = 'no-repeat'
      flagElement.src = country.flag

      const markerPopup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`
          <h3> ${country.name} </h3>
          <img src = ${country.flag} width="70%" />
          <p> <strong> Population: </strong> ${country.population} <br> ${country.nativeName}</p>
          `
        )

      return new mapboxgl.Marker(flagElement)

        .setLngLat({ lat: country.latlng[0], lng: country.latlng[1] })
        .setPopup(markerPopup)
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
