import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class App extends React.Component {
  componentDidMount(){
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(res =>{
        this.setState({countries: res.data})
      } )
  }
  render() {
    if(!this.state) return <p>hello</p>
    return (
      <div>
        {this.state.countries.map((country, index) => <p key={index}>{country.name}</p>)}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
