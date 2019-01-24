import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import './scss/style.scss'
import Map from './components/Map'



class App extends React.Component {


  constructor() {
    super()
    // this.state = {
    //   userLat: '',
    //   userLng: ''
    // }

  }


  componentDidMount() {
    navigator.geolocation.getCurrentPosition((pos) => {
      const {latitude, longitude}  = pos.coords
      this.getEvents(latitude, longitude)
      //this.setState({ userLat: latitude, userLng: longitude })
      console.log(pos.coords)
    })
    //this.getEvents = this.getEvents.bind(this)
  }


  getEvents(latitude, longitude) {
    const today = new Date(),
      date = today.getFullYear() + '-' + ((today.getMonth()+1) < 9 ? '0'+(today.getMonth()+1) : today.getMonth()) + '-' + (today.getDate() < 9 ? '0' + (today.getDate()) : today.getDate())

    axios.get(`https://cors-anywhere.herokuapp.com/https://www.skiddle.com/api/v1/events/search/?api_key=4bf27d4db7486be5b02c0d7dd0fa06af&latitude=${latitude}&longitude=${longitude}&radius=5&order=distance&description=1&minDate=${date}&maxDate=${date}&limit=100`)

      .then(res => this.setState({ events: res.data, userLat: latitude, userLng: longitude}))
  }

  //{{ baseURL  }}&latitude=51.5153&longitude=0.0723&radius=10&order=distance&description=1&minDate=2019-01-23&maxDate=2019-01-25


  render() {
    if (!this.state) return null
    console.log(this.state.events)
    //console.log(this.state.events.results.venue.name)
    return (
      <main>
        <Map
          events={this.state.events.results}
          center={{ lat: this.state.userLat, lng: this.state.userLng}}
          zoom={13}
        />
      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
