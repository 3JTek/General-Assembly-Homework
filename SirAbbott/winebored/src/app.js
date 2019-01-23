import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

import 'bulma'
import './style.scss'

import Home from './components/Home.js'
import WinesIndex from './components/wines/WinesIndex.js'
import WinesShow from './components/wines/WinesShow.js'
import WinesNew from './components/wines/WinesNew.js'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

class App extends React.Component {


  render() {
    return (
      <BrowserRouter>
        <main>
          <nav className="navbar is-primary">
            <Link className="links" to="/">Home </Link>
            <Link className="links" to="/wines"> Wines Index</Link>
            <Link className="links" to="/wines/new">New Wine</Link>
            <Link className="links" to="/register">Register</Link>
            <Link className="links" to="/login">Log in</Link>
          </nav>
          <Switch>
            <Route path="/wines/new" component={WinesNew} />
            <Route path="/wines/:id" component={WinesShow} />
            <Route path="/wines" component={WinesIndex} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route  exact path="/" component={ Home } />
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
