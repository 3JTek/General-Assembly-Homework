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
      //console.log(name, venue, desc, latitude, longitude, image)



      //add a popup

      const popup = new mapboxgl.Popup({offset: 40})
        .setHTML(`
          <div class="event-image">
            <img src="${image}" alt="${name}" />
          </div>
          <h4>${name}</h4>
          <i>${venue}</i>
          <p>${desc}</p>
          `)

      return new mapboxgl.Marker()
        .setLngLat({ lat: latitude, lng: longitude })
        .addTo(this.map)
        .setPopup(popup)

    })
  }


  render() {
    //console.log(this.props.events.results)


    return (
      <div className='map' ref={mapDiv => this.mapDiv = mapDiv} />
    )
  }
}

export default Map
