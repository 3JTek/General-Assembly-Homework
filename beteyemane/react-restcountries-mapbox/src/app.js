import React from 'react'
import ReactDOM from 'react-dom'
import Map from './components/Map'

import './scss/style.scss'
import 'mapbox-gl/dist/mapbox-gl.css'

class App extends React.Component {

  render() {
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
