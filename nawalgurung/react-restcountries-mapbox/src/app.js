import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import './scss/style.scss'
import Map from './components/Map'

class App extends React.Component {

  componentDidMount(){
    axios.get('')
  }

  render() {
    // if(!this.state) return null
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
