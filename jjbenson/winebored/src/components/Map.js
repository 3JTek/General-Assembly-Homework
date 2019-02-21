import React from 'react'

import mapboxgl from 'mapbox-gl'

import 'mapbox-gl/dist/mapbox-gl.css'

mapboxgl.accessToken = 'pk.eyJ1IjoidGhlb2JpcmNoIiwiYSI6ImNqcjY4ZzRpaDEzMzYzeXRnaDAwanY4M2kifQ.qPRSOdFwuQsp5X1QkTPHeg'

import { Redirect } from 'react-router'

class Map extends React.Component {

  constructor(){
    super()

    this.state = {}
  }

  //Click method for markers
  handleClick(id){
    //Redirect to wine page
    this.setState({redirect: true, savedId: id})
  }

  createMarkerElement(clickable,id){
    const markerElement = document.createElement('DIV')
    markerElement.className = 'custom-marker'

    if(clickable === 'true'){
      //Add the event listener
      markerElement.addEventListener('click', ()=> this.handleClick(id))

      //Bind the click even to this
      this.handleClick = this.handleClick.bind(this)
    }

    //Create the pointer that can be rotated
    const pointer = document.createElement('DIV')
    pointer.className = 'pointer'
    markerElement.appendChild(pointer)
    return markerElement
  }

  //When component mounts
  componentDidMount(){

    //Get variables
    const {zoom, wines, center=wines[0].location, clickable='false' } = this.props


    //Create a new map
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: center,
      zoom: zoom
    })

    wines.map((wine)=>{
      if(!wine.location) return
      const markerElement = this.createMarkerElement(clickable,wine._id)
      // console.log('wine.location',wine.location)
      return new mapboxgl.Marker(markerElement)
        .setLngLat(wine.location)
        .addTo(this.map)
    })

  }


  render() {
    // if(!this.state.wines)return null
    //If redirect true, go to the clicked page
    if (this.state.redirect) {
      return <Redirect push to={'/wines/'+this.state.savedId} />
    }
    return (
      <div className='map' ref={el => this.mapDiv = el}></div>
    )
  }
}

export default Map
