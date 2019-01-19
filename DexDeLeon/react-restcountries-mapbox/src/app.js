import React from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'

import './scss/style.scss'

import Map from './components/Map'

class App extends React.Component {

  componentDidMount(){
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(countries => console.log(countries))
  }

  render() {
    return (
      <Map />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
