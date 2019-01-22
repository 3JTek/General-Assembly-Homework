import React from 'react'
import ReactDOM from 'react-dom'

import 'bulma'
import './style.scss'

import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import WinesIndex from './components/WinesIndex'
import WinesShow from './components/WinesShow'


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <nav className="links">
            <Link to='/' className="link">Home</Link>
            <Link to='/wines' className="link">Wines Index</Link>
          </nav>
          <Switch>
            <Route path="/wines/:id" component={WinesShow} />
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
