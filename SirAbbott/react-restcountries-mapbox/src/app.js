import React from 'react'
import ReactDOM from 'react-dom'

import './scss/style.scss'
import axios from 'axios'

import Map from './components/Map'

class App extends React.Component {

  componentDidMount(){
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(res => this.setState({ countries: res.data }))

  }


  render() {
    if (!this.state) return null
    console.log('STATE', ...this.state.countries)
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
