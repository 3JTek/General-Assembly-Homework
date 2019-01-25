import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import 'bulma'
import './style.scss'

import Home from './components/Home'
import ArtistShow from './components/ArtistShow'
import AlbumShow from './components/AlbumShow'
import AlbumUndefined from './components/AlbumUndefined'

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <main>
          <Switch>
            <Route path="/:artist/undefined" component={AlbumUndefined} />
            <Route path="/:artist/:album" component={AlbumShow} />
            <Route path="/:artist" component={ArtistShow} />
            <Route exact path="/" component={Home} />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
