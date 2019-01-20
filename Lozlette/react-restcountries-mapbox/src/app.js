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

    // console.log(this.state)
    let latLng
    let lat
    let lng
    const lnglatMapbox = []
    let filteredLngLat = []
    const data = Object.values(this.state)
    // console.log(data, typeof data)



    for (let i = 0; i < data[0].length; i++) {
      latLng = Object.values(data[0][i])
      // console.log('working', data[0][i].latlng)
      lat = data[0][i].latlng[0]
      // console.log('lat', data[0][i].latlng[0])
      lng = data[0][i].latlng[1]
      // console.log('lng', data[0][i].latlng[1])
      lnglatMapbox.push([lng,lat])

    }
    console.log('latlng', latLng)
    console.log(lnglatMapbox)


    // const filteredLngLat = lnglatMapbox.forEach((array) => {
    //   array.filter(function(innerArrays){
    //     return innerArrays !== undefined
    //   })
    // }
    // )

    for (let i = 0; i < lnglatMapbox.length; i++){
      filteredLngLat.push(lnglatMapbox[i].filter( Boolean ))
    }

    console.log(filteredLngLat)




    // console.log(filteredLngLat)
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
