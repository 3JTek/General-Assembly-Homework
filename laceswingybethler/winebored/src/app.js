import React from 'react'
import ReactDOM from 'react-dom'

import './style.scss'
import 'bulma'

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import WinesIndex from './components/WinesIndex'
import Home from './components/Home'
import WineShow from './components/WineShow'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <nav>
            <Link to="/">Home </Link>
            <Link to="/wines"> Wines Index</Link>
          </nav>

          <Switch>
            <Route path="/wines/:id" component={WineShow} />
            <Route path="/wines" component={WinesIndex} />
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
