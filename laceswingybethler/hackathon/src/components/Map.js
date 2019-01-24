import React from 'react'


import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = process.env.MAPBOX_TOKEN
import 'mapbox-gl/dist/mapbox-gl.css'

class Map extends React.Component {

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/dark-v9',
      center: this.props.center,
      zoom: this.props.zoom
    })



    this.props.events.map(event => {
      const latitude = event.venue.latitude
      const longitude = event.venue.longitude
      const name = event.eventname
      const venue = event.venue.name
      const desc = event.description
      const image = event.imageurl
      //const type = event.venue.type
      const type = event.EventCode.toLowerCase()

      const link = event.link
      console.log(type)



      //add a popup

      const popup = new mapboxgl.Popup({offset: 20})
        .setHTML(`
          <div class="event-image">
            <img src="${image}" alt="${name}" />
          </div>
          <h4>${name}</h4>
          <i>${venue}</i>
          <p>${desc}</p>
          <a href="${link}">Get Ticket</a>
          <a href="https://www.google.co.uk/maps"> Directions </a>
          `)

      const markerElement = document.createElement('DIV')
      markerElement.className = `${type}`


      return new mapboxgl.Marker(markerElement)
        .setLngLat({ lat: latitude, lng: longitude })
        .addTo(this.map)
        .setPopup(popup)

    })
  }


  render() {
    //console.log(this.props.events.results)


    return (
      <div>
        <div className='map' ref={mapDiv => this.mapDiv = mapDiv}></div>
        <div>{this.props.children}</div>
      </div>

    )
  }
}

export default Map
