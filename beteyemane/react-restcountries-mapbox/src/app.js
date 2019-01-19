import React from 'react'
import ReactDOM from 'react-dom'
import Map from './components/Map'

import './scss/style.scss'
import 'mapbox-gl/dist/mapbox-gl.css'
import axios from 'axios'


class App extends React.Component {
  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(response => this.setState({data: response.data}))
  }

  render() {
    if(!this.state) {
      return null
    } else {
      this.state.data.filter(function(dat) {
        if(dat.latlng.length !== 0)
          console.log(dat.latlng)
      })
    }
    return (
      <main>
        <Map />
      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
