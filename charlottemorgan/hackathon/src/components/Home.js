import React from 'react'
import axios from 'axios'
const lastFmKey = process.env.LASTFM_KEY
const musixKey = process.env.MUSIX_KEY

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      search: '',
      albums: {
      },
      artist: {
      }

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/artist.search?apikey=${musixKey}&q_artist=${this.state.search}`)
      .then(res => this.setState({ artist: res.data }))
  }

  handleChange({ target: { value } }) {
    this.setState({ search: value })
  }


  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Search for an Artist</label>
        <input
          name="query"
          placeholder="search"
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>

    )
  }
}

export default Home
