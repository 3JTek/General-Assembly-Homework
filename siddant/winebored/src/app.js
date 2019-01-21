import React from 'react'
import ReactDOM from 'react-dom'

import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'

import Home from './components/Home'
import ShowWineIndex from './components/ShowWineIndex'
import WineShow from './components/WineShow'

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
            <Route path="/wines/:id" component={WineShow} />
            <Route path="/wines" component={ShowWineIndex} />
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
