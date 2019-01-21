import React from 'react'
import ReactDOM from 'react-dom'
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bulma'
import './style.scss'

import Home from './components/Home'
import WineIndex from './components/WineIndex'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <nav>
            <Link to="/"> Home </Link>
            <Link to="/wines"> All Wines </Link>
          </nav>


          <Switch>
            <Route path="/wines" component={WineIndex}/>
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
