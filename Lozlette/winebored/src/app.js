import React from 'react'
import ReactDOM from 'react-dom'

import 'bulma'
import './style.scss'

import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import WinesIndex from './components/Wines/WinesIndex'
import WinesShow from './components/Wines/WinesShow'
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'
import WinesNew from './components/Wines/WinesNew'


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <nav className="links">
            <Link to="/" className="link">Home</Link>
            <Link to="/wines" className="link">Wines Index</Link>
            <Link to="/register" className="link">Register</Link>
            <Link to="/login" className="link">Login</Link>
            <Link to="/wines/new" className="link">New Wine</Link>
          </nav>
          <Switch>
            <Route path="/wines/new" component={WinesNew} />
            <Route path="/wines/:id" component={WinesShow} />
            <Route path="/wines" component={WinesIndex} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
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
