import React from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'
import './style.scss'
import 'bulma'

const apiKey = '&apikey=6116c432'
const baseUrl = 'http://www.omdbapi.com/'

import DisplayTime from './components/DisplayTime'
import DisplayMoviesWatched from './components/DisplayMoviesWatched'
import MovieCard from './components/MovieCard'
import SearchBar from './components/SearchBar.js'
import RecommendedMovies from './components/RecommendedMovies'




class App extends React.Component {
  constructor(){
    super()

    this.state={
      searchText: '',
      timeWatched: 0,
      moviesWatched: []
    }
    this.run = true
    this.handleChange = this.handleChange.bind(this)
    this.getMovie = this.getMovie.bind(this)
    this.getRelatedMovies = this.getRelatedMovies.bind(this)
  }

  componentDidUpdate(){
    if(this.run && this.state.searchText.length > 2) this.getPossibleResults()
    this.run = false
  }

  handleChange(e){
    this.run = true
    this.setState({ searchText: e.target.value })
  }

  getPossibleResults(){
    axios
      .get(`${baseUrl}?s=${this.state.searchText}${apiKey}`)
      .then(res => {
        const filtered = res.data.Search.filter(result => result.Type==='movie')
        this.setState({ possibleResults: filtered })
      })
      .catch(err => console.log(err))
  }


  getMovie(e){
    this.setState({ searchText: '', possibleResults: []})
    axios
      .get(`${baseUrl}?i=${e.currentTarget.id}${apiKey}`)
        .then(res => {
          this.setState({
            timeWatched: this.state.timeWatched + parseFloat(res.data.Runtime),
            moviesWatched: [res.data, ...this.state.moviesWatched]
          })
        })
        this.getRelatedMovies(e.currentTarget.id)
  }

  getRelatedMovies(id){
    if(this.state.moviesWatched.length < 1) return null
    axios
      .get(`https://api.themoviedb.org/3/find/${id}?api_key=adfdea606b119c5d76189ff434738475&external_source=imdb_id`)
        .then(res => this.makeRecommendedRequest(res.data.movie_results[0].id))
  }

  makeRecommendedRequest(id){
    axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=adfdea606b119c5d76189ff434738475`)
      .then(res => this.setState({ relatedMovies: res.data.results}))
  }

  render() {
    return (
      <main className="has-background-grey">
        <section className="section">
          <div className="container">
            <DisplayTime timeWatched={this.state.timeWatched} />
            <SearchBar
              getMovie={this.getMovie}
              handleChange={this.handleChange}
              searchText={this.state.searchText}
              possibleResults={this.state.possibleResults}
            />
          </div>
        </section>

        <section className="columns section">
          <div className="column is-9 middle-part">
            <DisplayMoviesWatched movies={this.state.moviesWatched} />
          </div>
          <div className="column is-3 side-part">
            {this.state.relatedMovies &&
            <RecommendedMovies
              movies={this.state.relatedMovies}
            />}
          </div>
        </section>

      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
