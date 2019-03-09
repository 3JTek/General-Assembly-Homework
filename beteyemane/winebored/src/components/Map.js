import React from 'react'

import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = 'pk.eyJ1IjoidGhlb2JpcmNoIiwiYSI6ImNqcjY4ZzRpaDEzMzYzeXRnaDAwanY4M2kifQ.qPRSOdFwuQsp5X1QkTPHeg'
import 'mapbox-gl/dist/mapbox-gl.css'

class Map extends React.Component {

  componentDidMount() {

    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v10',
      zoom: 2
    })
  }

  render() {
    console.log(this.props)
    return(
      <main>
        <div className="map" ref={el => this.mapDiv = el}/>
      </main>
    )
  }
}
export default Map