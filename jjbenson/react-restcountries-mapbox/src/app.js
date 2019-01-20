import React from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'

import './scss/style.scss'

import Map from './components/Map'


class App extends React.Component {

  constructor(){
    super()

  }
  //Method to request iss data, calls itself every second
  getIssData(){
    axios.get('http://api.open-notify.org/iss-now.json')
      .then(res => {
        const lng = res.data.iss_position.longitude
        const lat = res.data.iss_position.latitude
        const issData = {lng, lat}

        this.setState({issData})

        setTimeout(()=>{
          this.getIssData()
        },1000)
      })
      .catch((err)=>{
        console.error(err)
      })
  }

  //Method to get country data
  getCountryData(){
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(res => {
        let data = []
        res.data.forEach((country)=>{
          const {name, flag, latlng} = country
          const newCountry = {
            name,
            flag,
            lngLat: [latlng[1],latlng[0]]
          }
          data.push(newCountry)

        })

        data = data.filter((country)=> !!country.lngLat[0])

        this.setState({ data })

      })
      .catch((err)=>{
        console.error(err)
      })
  }

  //When the component mounts, call the ajax request methods
  componentDidMount(){
    this.getCountryData()
    this.getIssData()

  }

  render() {
    //If state is empty, do nothing
    //We need this as state may be created by either ajax request, but we need to test if the data and issData exist, and we can't do that if state doesn't exist.
    if(!this.state) return null

    //If country data has not been received, do nothing
    if(!this.state.data) return null

    //If iss data has not been received, do nothing
    if(!this.state.issData) return null

    //Do the map component
    return (
      <Map
        center={ {lat: 51.500,lng: -0.007}}
        zoom={0}
        data={this.state.data}
        issData={this.state.issData}
      />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
