import React from 'react'
import ReactDOM from 'react-dom'

import './style.scss'
import 'bulma'

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import WinesIndex from './components/wines/WinesIndex'
import Home from './components/Home'
import WineShow from './components/wines/WineShow'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import WinesNew from './components/wines/WinesNew'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <nav>
            <Link to="/">Home </Link>
            <Link to="/wines"> Wines Index</Link>
            <Link to="/register"> Register</Link>
            <Link to="/login"> Login</Link>
            <Link to="/wines/new"> Add a wine</Link>
          </nav>

          <Switch>
            <Route path="/wines/:id" component={WineShow} />
            <Route path="/wines/new" component={WinesNew} />
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
