import React from 'react'
import ReactDOM from 'react-dom'
import mapboxgl from 'mapbox-gl'

import './scss/style.scss'

class App extends React.Component {

  componentDidMount(){
    console.log(this.mapDOMElement)
    mapboxgl.accessToken = process.env.MAPBOX_TOKEN
    console.log(process.env);
    const map = new mapboxgl.Map({
      container: this.mapDOMElement,
      style: 'mapbox://styles/mapbox/streets-v9',
      zoom: 1
    })
  }

  render() {
    return (
      <div id='map' ref={element => this.mapDOMElement = element}/>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
