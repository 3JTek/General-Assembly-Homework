import React from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'
import Map from './components/Map'
import Header from './components/Header'
import './scss/style.scss'

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      filter: 'all'
    }

    this.changeFilter = this.changeFilter.bind(this)
  }
  componentDidMount(){
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(res => this.setState({
        countries: res.data
      }))

  }

  changeFilter(e){
    this.setState({
      filter: e.target.value
    })
  }

  render() {
    if(!this.state.countries) return null
    return (
      <div>
        <Header
            changeFilter={this.changeFilter}
         />
        <Map
          countries={this.state.countries}
          filter={this.state.filter}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
