import React from 'react'
import ReactDOM from 'react-dom'

import {BrowserRouter, Route, Link, Switch } from 'react-router-dom'


import './style.scss'


import 'bulma'

import Home from './components/Home'
import WinesIndex from './components/WinesIndex'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/wines">All Cheeses</Link>
          </nav>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/wines" component={WinesIndex}></Route>
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
