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
    let lat
    let lng
    const data = Object.values(this.state)
    console.log(data, typeof data)



    for (let i = 0; i < data[0].length; i++) {
      latLng = Object.values(data[0][i])
      console.log('working', data[0][i].latlng)
      lat = data[0][i].latlng[0]
      console.log('lat', data[0][i].latlng[0])
      lng = data[0][i].latlng[1]
      console.log('lng', data[0][i].latlng[1])

    }
    console.log('latlng', latLng)



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
