import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

import 'bulma'
import './style.scss'

import Home from './components/Home.js'
import WinesIndex from './components/WinesIndex.js'
import WinesShow from './components/WinesShow.js'

class App extends React.Component {


  render() {
    return (
      <BrowserRouter>
        <main>
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/wines">Wines Index</Link>
          </nav>
          <Switch>
            <Route path="/wines/:id" component={WinesShow} />
            <Route path="/wines" component={WinesIndex} />
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
