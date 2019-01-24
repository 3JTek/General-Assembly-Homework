import React from 'react'
import ReactDOM from 'react-dom'

import './scss/style.scss'
import Map from './components/Map'


class App extends React.Component {
  render() {
    //if (!this.state) return null
    //console.log(this.state)
    return (
      <main>
        <Map
          center={{ lat: 51.5, lng: -0.07}}
          zoom={11}
        />
      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
