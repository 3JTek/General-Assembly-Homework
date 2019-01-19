import React from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'

import './scss/style.scss'

import Map from './components/Map'

class App extends React.Component {


  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(response => this.setState( { countries: response.data }))
      .catch( error => console.log(error))


  }

  render() {




    // if (Object.value(countries)){
    //   for (let i = 0; i < Object.value(this.state).length; i++) {
    //     console.log(Object.value(this.state)[i].latlng)
    //   }
    // }



    //
    // if (this.state.data){
    //   for (let i = 0; i < this.state.data.length; i++) {
    //     console.log(this.state.data[i].latlng)
    //   }
    // }

    console.log(this.state)
    // const data = Array.from(this.state)
    // console.log(data)


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
