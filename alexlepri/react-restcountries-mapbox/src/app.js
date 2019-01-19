import React from 'react'
import ReactDOM from 'react-dom'
import Map from './components/Map'

import axios from 'axios'

import './scss/style.scss'


class App extends React.Component {

  componentDidMount () {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(res => this.setState( { country: res.data }))
  }



  render() {
    console.log(this.setState)
    console.log(this.state)
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
