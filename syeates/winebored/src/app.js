import React from 'react'
import ReactDOM from 'react-dom'

import 'bulma'
import './style.scss'

import {BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import Home from './components/Home'
import WineIndex from './components/WineIndex'
import WineShow from './components/WineShow'


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <nav>
            <Link to ="/" >Homepage </Link>
            <Link to="/wines" > Wine List</Link>
          </nav>
          <Switch>
            <Route path="/wines/:id" component={WineShow} />
            <Route path="/wines" component={WineIndex} />
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
