import React from 'react'
import ReactDOM from 'react-dom'

import 'bulma'
import './style.scss'

import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'

import Home from './components/Home'
import WinesIndex from './components/WinesIndex'


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>

          <nav>
            <Link to="/">Home</Link>
            <Link to="/wines">Wines</Link>
          </nav>

          <Switch>
            <Route path="/wines" component={WinesIndex} />
            <Route path="/" component={Home}/>
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

// <Route path="/wines/:id" Component={WinesShow}/>
// <Route path="/wines" Component={WinesIndex}/>
