import React from 'react'
import ReactDOM from 'react-dom'
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bulma'
import './style.scss'

import Home from './components/wines/Home'
import WineIndex from './components/Wines/WineIndex'
import WineShow from './components/Wines/WineShow'
import Nav from './components/Wines/Nav'
import Map from './components/Wines/Map'
import WineNew from './components/Wines/WineNew'
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Nav />


          <Switch>
            <Route path="/wines/new" component={WineNew}/>
            <Route path="/wines/:id/:location" component={Map}/>
            <Route path="/wines/:id" component={WineShow}/>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
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
