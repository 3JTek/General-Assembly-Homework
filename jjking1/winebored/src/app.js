import React from 'react'
import ReactDOM from 'react-dom'
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bulma'
import './style.scss'

import Home from './components/Home'
import WineIndex from './components/WineIndex'
import WineShow from './components/WineShow'
import Nav from './components/Nav'
import Map from './components/Map'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Nav />


          <Switch>
            <Route path="/wines/:id/:location" component={Map}/>
            <Route path="/wines/:id" component={WineShow}/>
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
