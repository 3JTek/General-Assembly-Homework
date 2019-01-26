import React from 'react'
import axios from 'axios'

const musixKey = process.env.MUSIX_KEY

import SearchResults from './SearchResults'

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      search: '',
      artists: [],
      submit: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    if(e.target.value !== ''){
      axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/artist.search?apikey=${musixKey}&q_artist=${this.state.search}`)
        .then(res => this.setState({ artists: res.data.message.body.artist_list.slice(0, 5) }))
        .catch(error => alert(error))
      this.setState({ submit: true })
    }
  }

  handleChange({ target: { value } }) {
    this.setState({ search: value, submit: false })
  }


  render() {
    return(
      <div>
        <header className="section">
          <h1 className="title">Project CD</h1>
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
                    placeholder="Please enter an artist name..."
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
          submit={this.state.submit}
        />
      </div>
    )
  }
}

export default Home
