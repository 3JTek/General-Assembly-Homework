import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import 'bulma'
import './style.scss'

import Home from './components/Home'
import NavBar from './components/NavBar'
import WinesIndex from './components/WinesIndex'
import ShowWine from './components/ShowWine'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <NavBar />
          <Switch>
            <Route path="/wines/:id" component={ShowWine}></Route>
            <Route path="/wines" component={WinesIndex}></Route>
            <Route exact path="/" component={Home}></Route>
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
