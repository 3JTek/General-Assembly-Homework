import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

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

          <nav>
            <Link to="/">Home </Link>
            <Link to="/wines"> WinesIndex</Link>
          </nav>
          <Switch>
            <Route path="/wines/:id" component={WinesShow} />
            <Route path="/wines" component={WinesIndex} />
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
