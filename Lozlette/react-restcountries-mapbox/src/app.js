import React from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'

import './scss/style.scss'

import Map from './components/Map'

class App extends React.Component {


  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(response => this.setState( { countries: response.data }))
      .catch( error => console.log(error))


  }

  render() {
    if(!this.state) return null
    console.log(this.state)

    let latLng
    const data = Object.values(this.state)
    console.log(data)
    if (data){
      for (let i = 0; i < data.length; i++) {
        latLng = [data[i].latlng]
      }
    }
    console.log(latLng)

    // if (Object.value(countries)){
    //   for (let i = 0; i < Object.value(this.state).length; i++) {
    //     console.log(Object.value(this.state)[i].latlng)
    //   }
    // }








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
