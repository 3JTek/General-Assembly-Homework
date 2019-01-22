import React from 'react'
import ReactDOM from 'react-dom'

import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'

import Home from './components/Home'
import ShowWineIndex from './components/Wines/ShowWineIndex'
import WineShow from './components/Wines/WineShow'
import AddWine from './components/Wines/AddWine'

import Register from './components/Auth/Register'
import Login from './components/Auth/Login'

import 'bulma'
import './style.scss'


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <a className="navbar-item">
                <p>WineBored</p>
              </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <Link className="navbar-item" to="/">Home</Link>
                <Link className="navbar-item" to="/wines">Wines</Link>
                <Link className="navbar-item" to="/wines/new">Add Wines</Link>
              </div>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <Link className="navbar-item button is-primary" to="/register">Register</Link>
                  <Link className="navbar-item button is-light" to="/login">Log in</Link>
                </div>
              </div>
            </div>
          </nav>
          <Switch>
            <Route path="/wines/new" component={AddWine} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/wines/:id" component={WineShow} />
            <Route path="/wines" component={ShowWineIndex} />
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
