import React from 'react'

import mapboxgl from 'mapbox-gl'

import 'mapbox-gl/dist/mapbox-gl.css'

mapboxgl.accessToken = process.env.MAPBOX_TOKEN


class Map extends React.Component {

  //Click method for markers
  handleClick(id){
    //I would like to make this a <Link /> so page doesn't reload
    window.location.href = `/wines/${id}`
  }

  //When component mounts
  componentDidMount(){

    //Get variables
    const {zoom, wines, center=wines[0].location } = this.props


    //Create a new map
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: center,
      zoom: zoom
    })

    wines.map((wine)=>{

      const markerElement = document.createElement('DIV')
      markerElement.className = 'custom-marker'
      //Add the event listener
      markerElement.addEventListener('click', ()=> this.handleClick(wine._id))
      //Bind the click even to this
      this.handleClick = this.handleClick.bind(this)


      const pointer = document.createElement('DIV')
      pointer.className = 'pointer'
      markerElement.appendChild(pointer)

      //Add the marker
      return new mapboxgl.Marker(markerElement)
        .setLngLat(wine.location)
        .addTo(this.map)
    })

  }


  render() {
    console.log(this.props)
    return (
      <div className='map' ref={el => this.mapDiv = el}></div>
    )
  }
}

export default Map
