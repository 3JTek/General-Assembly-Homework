import React from 'react'
import ReactDOM from 'react-dom'

import './scss/style.scss'

import Map from './components/Map'
import axios from 'axios'

class App extends React.Component {

  constructor(props){
    super(props)

    this.countriesWithCoord,
    this.state = {
      mapDisplay: {
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 1,
        countries: []
      }
    }
  }
  componentDidMount(){
    //Get the data from restcountries api and store them in App state
    axios.get('https://restcountries.eu/rest/v2/all').then(data => {
      this.setState({countries: data.data})
    })
  }


  render() {
    if(!this.state.countries) return false
    return (
      <main>
        <Map
          mapDisplay={this.state.mapDisplay}
          countries={this.state.countries}
        />
      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
