import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      events: []
    }
  }

  componentDidMount() {
    axios.get('https://www.skiddle.com/api/v1/events/search/?api_key=0c64ae5cca7903c86353520198c58021')
      .then(response => this.setState({events: response.data}))
    // .catch(err => alert(err.message))
    // axios.get('http://api.weatherunlocked.com/api/current/51.50,0.127?app_id=e1d52047&app_key=f661656492325936d90c42a2a8485541')
    //   .then(response => this.setState({temps: response.data}))
    //   .catch(err => alert(err.message))
  }

  render() {
    if(!this.state.events.results) return null
    console.log('events.results', this.state.events.results)
    // console.log('events.results[0]', this.state.events.results[0])


    return (
      <div>
        {this.state.events.results.map((event, index) => <h1 key={index}> {event.eventname} </h1>)}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
