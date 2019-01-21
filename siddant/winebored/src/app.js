import React from 'react'
import ReactDOM from 'react-dom'

import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'

import Home from './components/Home'
import ShowWine from './components/ShowWine'

import './style.scss'

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
            <Route exact path="/" component={Home} />
            <Route path="/wines" component={ShowWine} />
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
