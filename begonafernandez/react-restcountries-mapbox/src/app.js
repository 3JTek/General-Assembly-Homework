import React from 'react'
import ReactDOM from 'react-dom'
import './scss/style.scss'
import axios from 'axios'

import Map from './components/Map'


class App extends React.Component {
  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(res => this.setState({countries: res.data}))
      .catch( error => console.log(error))

  }

  render() {
    if (!this.state) {
      return null
    }
    return (
      <Map
        markers= {this.state.countries}/>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
