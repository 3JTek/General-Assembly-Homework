import React from 'react'
import ReactDOM from 'react-dom'

import './scss/style.scss'
import axios from 'axios'

import Map from './components/Map'

class App extends React.Component {

  componentDidMount(){
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(res => this.setState({ countries: res.data }))
      .catch( error => console.log(error))
  }


  render() {
    if (!this.state) return null
    // const latlng = this.state.countries.map(country => country.latlng)
    return (
      <main>
        <Map
          countries={this.state.countries}
          center={{lat: 54.5260, lon: 15.2551}}
          zoom={4}/>
      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
