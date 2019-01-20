import React from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'

import './scss/style.scss'

import Map from './components/Map'

class App extends React.Component {

  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(response => this.setState( {data: response.data }))
  }

  render() {
    if(this.state.data){

      for (let i = 0; i < this.state.data.length; i++) {
        console.log(this.state.data[i].latlng)
      }
    }  return (
      <main>
        <Map center={{ lat: 51.5, lng: -0.1 }}
          zoom={12}
          markers={this.state.points} />
      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
