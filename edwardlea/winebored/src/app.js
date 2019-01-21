import React from 'react'
import ReactDOM from 'react-dom'

import {BrowserRouter, Route, Link, Switch } from 'react-router-dom'


import './style.scss'


import 'bulma'

import Home from './components/Home'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/.cheeses">All Cheeses</Link>

          </nav>
          <Switch>
            <Route exact path="/" component={Home}></Route>
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
