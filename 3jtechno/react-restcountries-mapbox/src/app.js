import React from 'react'
import ReactDOM from 'react-dom'

import './scss/style.scss'

import Map from './components/Map'
import url from 'url'
import axios from 'axios'

class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      mapOptions: {
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 3,
        defaultCenter: [-12.000000, -57.000000].reverse()
      }
    }
  }
  componentDidMount(){
    const URL = url.parse(window.location.href)
    const INSTAGRAM_CLIENT_ID = process.env.INSTA_CLIENT_ID
    const INSTAGRAM_AUTH_URL = 'https://api.instagram.com/oauth/authorize/?client_id='+ INSTAGRAM_CLIENT_ID + '&redirect_uri=' + URL.href + '&response_type=token'

    if(URL.hash === null || !URL.hash.includes('#access_token=')) {
      // If no access token specified, redirect to instagram auth page
      window.location = INSTAGRAM_AUTH_URL
      return false
    } else {
      this.accessToken = URL.hash.split('=')[1]
      this.nextPageUrl = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=' + this.accessToken
      + '&count=' + 40
      + '&callback=?'
      axios.get(this.nextPageUrl).then(res => this.setState({images: res.data.data}))
      return true
    }
  }

  render() {
    console.log(this.state.images)
    if(!this.state.images) return false
    return (
      <main>
        <Map
          mapOptions={this.state.mapOptions}
          images={this.state.images}
        />
      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
