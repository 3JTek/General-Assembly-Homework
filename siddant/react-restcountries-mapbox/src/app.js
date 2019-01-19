import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import Map from './components/Map.js'
import './scss/style.scss'

class App extends React.Component {
  componentDidMount(){
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(res =>{
        this.setState({countries: res.data.map(elemn => {
          return{
            name: elemn.name,
            population: elemn.population,
            location: elemn.latlng,
            nativeName: elemn.nativeName,
            flag: elemn.flag
          }
        })
        })
      } )
  }
  render() {
    if(!this.state) return <p>Loading...</p>
    return (
      <Map
        country={this.state.countries}
      />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
