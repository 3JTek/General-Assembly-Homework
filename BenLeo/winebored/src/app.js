import React from 'react'
import ReactDOM from 'react-dom'

import Home from './components/Home'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import WineIndex from './components/WineIndex'
import WineNew from './components/WineNew'
import WineShow from './components/WineShow'


import 'bulma'
import './style.scss'

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/wines">Wine Index</Link>
            <Link to="/wines/new">Add Wine</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </nav>

          <Switch>
            <Route path="/wines/new" component={WineNew} />
            <Route path="/wines/:id" component={WineShow} />
            <Route path="/wines" component={WineIndex} />
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login} />
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
