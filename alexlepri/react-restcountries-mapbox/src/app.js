import React from 'react'
import ReactDOM from 'react-dom'
import Map from './components/Map'


import axios from 'axios'

import './scss/style.scss'


class App extends React.Component {

  componentDidMount () {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(res => this.setState({ countries: res.data }))

  }


  render() {
    if (!this.state) return null
    console.log(this.state)

    return (

      <main>
        <Map countries={this.state.countries} zoom={1.5} />
      </main>

    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
