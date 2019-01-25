import React from 'react'
import axios from 'axios'


class EventsTown extends React.Component {

  constructor() {
    super()

    this.state = {
      events: []

    }
  }
  //get location data with params
  componentDidMount() {
    axios.get('https://www.skiddle.com/api/v1/events/search/?api_key=0c64ae5cca7903c86353520198c58021')
      .then(response => this.setState({events: response.data.results}))


    //filter the Location and //match value with town
    // this.state.events.filter(event => console.log(event))
  }


  render() {
    return (
      null
    )

  }
}


export default EventsTown
