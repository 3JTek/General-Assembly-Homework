import React from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'
import Map from './components/Map'
import './scss/style.scss'

class App extends React.Component {

  componentDidMount(){
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(res => this.setState({
        countries: res.data
      }))

  }

  render() {
    if(!this.state) return null
    return (
      <Map
        countries={this.state.countries}
      />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
