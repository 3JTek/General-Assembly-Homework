import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const lastFmKey = process.env.LASTFM_KEY

class AlbumShow extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      albumInfo: {}
    }
    this.mbid = this.props.match.params.album
  }

  componentDidMount() {
    this.getData()
  }

  getData(){
    axios.get(`http://ws.audioscrobbler.com/2.0?method=album.getInfo&api_key=${lastFmKey}&mbid=${this.mbid}&format=json`)
      .then(res =>
        this.setState({ albumInfo: res.data.album })
      )
  }

  render() {
    if(Object.keys(this.state.albumInfo).length === 0) return null
    return(
      <div>
        <header>
          <Link to="/" className="button">Search again</Link>
        </header>
        <section className="hero is-fullheight" style={
          { backgroundImage: `url(${this.state.albumInfo.image[3]['#text']})`}
        }>
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-1">{this.state.albumInfo.name}</h1>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <h2 className="subtitle is-1">Track Listing</h2>
            <ul id="trackListing">
              {this.state.albumInfo.tracks.track.map(track =>
                <li key={track.rank} className="columns">
                  <p className="column">{track.name}</p>
                  <a href={track.url} target="_blank" rel="noopener noreferrer" className="musicButton column is-one-fifth">Listen</a>
                </li>
              )}
            </ul>
          </div>
        </section>
      </div>
    )
  }
}

export default AlbumShow
