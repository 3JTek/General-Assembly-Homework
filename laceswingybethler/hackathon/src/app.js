import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import './scss/style.scss'
import Map from './components/Map'


class App extends React.Component {

  componentDidMount() {
    const today = new Date(),
      date = today.getFullYear() + '-' + ((today.getMonth()+1) < 9 ? '0'+(today.getMonth()+1) : today.getMonth()) + '-' + (today.getDate() < 9 ? '0' + (today.getDate()) : today.getDate())

    axios.get(`https://cors-anywhere.herokuapp.com/https://www.skiddle.com/api/v1/events/search/?api_key=4bf27d4db7486be5b02c0d7dd0fa06af&latitude=51.5153&longitude=0.0723&radius=10&order=distance&description=1&minDate=${date}&maxDate=${date}`)
      .then(res => this.setState({ events: res.data }))
  }

  //{{ baseURL  }}&latitude=51.5153&longitude=0.0723&radius=10&order=distance&description=1&minDate=2019-01-23&maxDate=2019-01-25


  render() {
    if (!this.state) return null
    //console.log(this.state)
    return (
      <main>
        <Map
          events={this.state.events.results}
          center={{ lat: 51.5, lng: -0.07}}
          zoom={11}
        />
      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
