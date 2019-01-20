import React from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'

import './scss/style.scss'

import Map from './components/Map'

class App extends React.Component {
  // constructor(){
  //   super()
  //
  //   this.selectHandler = this.selectHandler.bind(this)
  // }

  componentDidMount(){
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(countries => this.setState({ countries: countries.data }))
  }

  // selectHandler(e){
  //
  //   const countries = this.state.countries.filter(country =>
  //     country.region.toLowerCase() === e.target.value
  //   )
  //   console.log(countries, this.state.countries)
  //   this.setState({ countries })
  // }

  render() {
    if (!this.state) return null
    return (
      // Attempted to add a select to filter through flag markers.
      // Managed to filter this.state.countries by region, but couldn't get the Map component to redraw the markers.
      // <div>
      //   <select onChange={this.selectHandler} >
      //     <option value="all">All</option>
      //     <option value="africa">Africa</option>
      //     <option value="americas">Americas</option>
      //     <option value="asia">Asia</option>
      //     <option value="europe">Europe</option>
      //     <option value="oceania">Oceania</option>
      //   </select>
      <Map
        zoom={1.25}
        center={{lat: 12.8797, lng: 121.7740}}
        countries={this.state.countries}
      />
      // </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
