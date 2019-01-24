import React from 'react'
import axios from 'axios'

const musixKey = process.env.MUSIX_KEY

import SearchResults from './SearchResults'

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      search: '',
      artists: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/artist.search?apikey=${musixKey}&q_artist=${this.state.search}`)
      .then(res => this.setState({ artists: res.data.message.body.artist_list.slice(0, 5) }))
  }

  handleChange({ target: { value } }) {
    this.setState({ search: value })
  }


  render() {
    return(
      <div>
        <header className="section">
          <h1 className="title">search</h1>
        </header>
        <div className="section">
          <div className="container">
            <form onSubmit={this.handleSubmit}>
              <div className="field">
                <label className="label">Search for an Artist</label>
                <div className="control">
                  <input
                    className="input"
                    name="query"
                    placeholder="search"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <button className="button">Submit</button>
            </form>
          </div>
        </div>
        <SearchResults
          artists={this.state.artists}
        />
      </div>
    )
  }
}

export default Home
