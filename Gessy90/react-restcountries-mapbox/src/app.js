import React from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'

import './scss/style.scss'

import Map from './components/Map'

class App extends React.Component {

  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(response => this.setState( { country: response.data }))
      .catch( error => console.log(error))
  }

  render() {
    if(!this.state) return null
    console.log(this.state.points)
    return (
      <main>
        <Map
          center={{ lat: 51.5, lng: -0.1 }}
          zoom={12}
          {...this.state.country}/>
      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
