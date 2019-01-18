import React from 'react'
import ReactDOM from 'react-dom'

import './scss/style.scss'

import Map from './components/Map'

class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      style: 'mapbox://styles/mapbox/streets-v9',
      zoom: 1
    }
  }



  render() {
    return (
      <main>
        <Map {...this.state}/>
      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
