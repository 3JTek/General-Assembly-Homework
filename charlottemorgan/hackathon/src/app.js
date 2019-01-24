import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const lastFmKey = process.env.LASTFM_KEY
const musixKey = process.env.MUSIX_KEY

import Home from './components/Home'

class App extends React.Component {

  componentDidMount() {
    axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getTopAlbums&api_key=${lastFmKey}&artist=beyonce&format=json`)
      .then(res => console.log(res))
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/artist.search?apikey=${musixKey}&q_artist=beyonce`)
      .then(res => console.log(res))
  }

  render() {
    return (
      <Home />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
