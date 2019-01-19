import React from 'react'
import ReactDOM from 'react-dom'

// import axios from 'axios'

import './scss/style.scss'

import Map from './components/Map'

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
