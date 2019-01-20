import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import Map from './components/Map.js'
import './scss/style.scss'

class App extends React.Component {

  componentDidMount(){
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(res => this.setState({ countries: res.data }))
      .catch( error => console.log(error))
  }


  render() {
    if(!this.state) return null

    // if(this.state.countries){
    //   for (let i = 0; i < this.state.countries.length; i++) {
    //     console.log(this.state.countries[i].latlng)
    //   }
    // }

    return (
      <main>
        <Map
          center={{ lat: 0, lng: 0 }}
          zoom={1}
          markers={this.state.countries}
        />
      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
