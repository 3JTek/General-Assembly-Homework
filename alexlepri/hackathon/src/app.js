import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import './scss/style.scss'

import Map from './components/Map'
import Key from './components/Key'

import LoadingPage from './components/LoadingPage'
// import Home from './components/Home'


class App extends React.Component {
  constructor() {
    super()

  }


  componentDidMount() {
    //test for presence of geolocation
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const {latitude, longitude}  = pos.coords
        this.getEvents(latitude, longitude)
        //this.setState({ userLat: latitude, userLng: longitude })
        console.log(pos.coords)
      })

    } else {
      alert('oh no!')
      console.log('geolocation is not available')
      //set state of userLat and userLng // set latitude and longitude
    }
  }



  getEvents(latitude, longitude) {
    const today = new Date(),
      date = today.getFullYear() + '-' + ((today.getMonth()+1) < 9 ? '0'+(today.getMonth()+1) : today.getMonth()) + '-' + (today.getDate() < 9 ? '0' + (today.getDate()) : today.getDate())
    axios.get(`https://cors-anywhere.herokuapp.com/https://www.skiddle.com/api/v1/events/search/?api_key=4bf27d4db7486be5b02c0d7dd0fa06af&latitude=${latitude}&longitude=${longitude}&radius=3&order=distance&description=1&minDate=${date}&maxDate=${date}&limit=100`)
      .then(res => this.setState({ events: res.data, userLat: latitude, userLng: longitude}))
  }


  //{{ baseURL  }}&latitude=51.5153&longitude=0.0723&radius=10&order=distance&description=1&minDate=2019-01-23&maxDate=2019-01-25
  render() {
    if (!this.state) return null
    //replace null with the loading page component
    console.log(this.state.events)
    //console.log(this.state.events.results.venue.name)
    return (
      <div>
        <LoadingPage />
        <main>

          <Map
            events={this.state.events.results}
            center={{ lat: this.state.userLat, lng: this.state.userLng}}
            zoom={15}
            userLat={this.state.userLat}
            userLng={this.state.userLng}>
            <Key />
          </Map>
        </main>
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
