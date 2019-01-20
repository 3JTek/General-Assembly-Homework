import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import './scss/style.scss'
import Map from './components/Map'

class App extends React.Component {

  componentDidMount() {

    axios.get('https://restcountries.eu/rest/v2/all?fields=flag;name;latlng')
      .then(res => this.setState({ points: res.data }))
  }

  render() {
    if (!this.state) return null
    console.log(this.state)
    return (

      <main>
        <Map
          countries={this.state.points}
          center={{ lat: 51.5, lng: -0.05}}
          zoom={1.7}
        />
      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
