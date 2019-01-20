import React from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'

class App extends React.Component {

  componentDidMount(){
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(res => this.setState({
        countries: res.data
      }))

  }

  render() {
    if(!this.state) return null
    console.log(this.state.countries)
    return (
      <h1>Hello World!</h1>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
