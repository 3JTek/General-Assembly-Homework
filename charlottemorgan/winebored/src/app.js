import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import 'bulma'
import './style.scss'

import Home from './components/Home.js'
import WinesIndex from './components/wines/WinesIndex.js'
import WinesShow from './components/wines/WinesShow.js'
import Register from './components/auth/Register'


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>

          <nav>
            <Link to="/">Home </Link>
            <Link to="/wines"> Wines-Index</Link>
            <Link to="/register"> Register</Link>
          </nav>
          <Switch>
            <Route path="/wines/:id" component={WinesShow} />
            <Route path="/wines" component={WinesIndex} />
            <Route path="/register" component={Register} />
            <Route path="/" component={Home} />
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
