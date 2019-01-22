import React from 'react'
import ReactDOM from 'react-dom'

import Home from './components/Home'
import Login from './components/Auth/Login'
import WineIndex from './components/WineIndex'
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
            <Link to="/login">Login</Link>
          </nav>

          <Switch>
            <Route path="/wines/:id" component={WineShow} />
            <Route path="/wines" component={WineIndex} />
            <Route path="/login" />
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
