import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const lastFmKey = process.env.LASTFM_KEY

class ArtistShow extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      albums: [],
      artistInfo: {}
    }
    this.title = this.props.match.params.artist
  }

  componentDidMount() {
    this.getData()
  }

  getData(){
    console.log(this.props.match.params.artist)
    axios.get(`http://ws.audioscrobbler.com/2.0?method=artist.getTopAlbums&api_key=${lastFmKey}&artist=${this.title}&autocorrect=1&format=json`)
      .then(res =>
        this.setState({ albums: res.data.topalbums.album.slice(0, 6) })
      )

    axios.get(`http://ws.audioscrobbler.com/2.0?method=artist.getInfo&api_key=${lastFmKey}&artist=${this.title}&autocorrect=1&format=json`)
      .then(res => this.setState({ artistInfo: res.data }))
  }

  killATag(){
    const bio = this.state.artistInfo.artist.bio.summary
    return bio.substr(0, bio.indexOf('<a'))
  }

  render() {
    if(Object.keys(this.state.artistInfo).length === 0) return null
    return(
      <div>
        <header>
          <Link to="/" className="button">Search again</Link>
        </header>
        <section className="hero is-large" style={
          { backgroundImage: `url(${this.state.artistInfo.artist.image[3]['#text']})`}
        }>
          <div className="hero-body">
            <div className="container">
              <h1 className="title">{this.title}</h1>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <h2 className="title">Artist Bio</h2>
            <div className="content">{this.killATag()}</div>
            <h2 className="title">Top Albums</h2>
            <div className="columns is-multiline">
              {this.state.albums.map((album, index) =>
                <Link key={index} to={`/${this.title}/${album.mbid}`} className="column is-one-third album">
                  <h2 className="subtitle is-3">{album.name}</h2>
                  <div className="albumDiv">
                    <img src={album.image[3]['#text']} alt={album.name} />
                  </div>
                </Link>
              )}
            </div>
          </div>
        </section>
        <div className="container">
          <h2 className="title is-1">Similar Artists</h2>
        </div>
        <ul id="searchResultList">
          {this.state.artistInfo.artist.similar.artist.map((artist, i) =>
            <Link key={i} to={`/${artist.name}`} onClick={this.getData}>
              <li id={`a${i}`}>{artist.name}</li>
            </Link>
          )}
        </ul>
      </div>
    )
  }
}

export default ArtistShow
