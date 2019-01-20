import React from 'react'

import mapboxgl from 'mapbox-gl'

import 'mapbox-gl/dist/mapbox-gl.css'

mapboxgl.accessToken = process.env.MAPBOX_TOKEN


class Map extends React.Component {

  //Click method for flags
  handleClick(e , marker){
    this.map.flyTo({center: marker.coordinates})
  }

  //When component mounts
  componentDidMount(){

    //Get variables
    const {center, zoom, data} = this.props

    //Create a new map
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/satellite-v9',
      center: center,
      zoom: zoom
    })

    //Show the map controls
    this.map.addControl(new mapboxgl.NavigationControl())

    //ADd the country markers
    data.map((marker,i) => {
      const markerElement = document.createElement('DIV')
      markerElement.className = 'custom-marker'
      markerElement.style.backgroundImage = 'url(\''+ marker.flag +'\')'

      // create the popup
      const popup = new mapboxgl.Popup({ offset: 25 })
        .setText(marker.name)

      //Add the event listener
      markerElement.addEventListener('click', (e)=> this.handleClick(e,marker))

      // Take the markers lnglat values and create an lngLat object and store it in the marker
      data[i].coordinates = mapboxgl.LngLat.convert(marker.lngLat)

      //Bind the click even to this
      this.handleClick = this.handleClick.bind(this)

      //Add the marker
      return new mapboxgl.Marker(markerElement)
        .setLngLat(data[i].coordinates)
        .setPopup(popup)
        .addTo(this.map)
    })


    //Update ISS and start the timer
    this.updateIss()

  }

  //Method to add a new marker where the ISS is
  updateIss(){

    const {lng, lat} = this.props.issData

    //Trigger the timeout to call this method again in 1 sec
    setTimeout(()=>{
      this.updateIss()
    },1000)

    //Create a custom element to leave a trace of where the ISS has been
    const markerElement = document.createElement('DIV')
    markerElement.className = 'trace'


    //Add the new marker
    return new mapboxgl.Marker(markerElement)
      .setLngLat({lng, lat})
      .addTo(this.map)
  }

  render() {
    return (
      <div className='map' ref={el => this.mapDiv = el}></div>
    )
  }
}

export default Map
