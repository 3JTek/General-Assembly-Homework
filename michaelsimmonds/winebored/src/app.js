import React from 'react'
import ReactDOM from 'react-dom'

import 'bulma'
import './style.scss'

import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'

import Home from './components/Home'
import WinesIndex from './components/wines/WinesIndex'
import WinesShow from './components/wines/WinesShow'
import WinesNew from './components/wines/WinesNew'
import Register from './components/auth/Register'
import Login from './components/auth/Login'


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>

          <nav className="navbar is-primary">
            <div className="container">
              <div className="navbar-start">
                <Link className="links" to="/"> Home </Link>
                <Link className="links" to="/wines"> Wines </Link>
                <Link className="links" to="/wines/new"> Add Wine </Link>
              </div>
              <div className="navbar-end">
                <Link className="links" to="/login"> Login </Link>
                <Link className="links" to="/register"> Register </Link>
              </div>
            </div>
          </nav>

          <Switch>
            <Route path="/wines/new" component={WinesNew} />
            <Route path="/wines/:id" component={WinesShow} />
            <Route path="/wines" component={WinesIndex} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Home}/>
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
