import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import 'bulma'
import './style.scss'

import Home from './components/Home'
import NavBar from './components/NavBar'
import WinesIndex from './components/wines/WinesIndex'
import ShowWine from './components/wines/ShowWine'
import WinesNew from './components/wines/WinesNew'
import WineEdit from './components/wines/WineEdit'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <NavBar />
          <Switch>
            <Route path="/wines/new" component={WinesNew}></Route>
            <Route path="/wines/:id" component={WineEdit}></Route>
            <Route path="/wines/:id" component={ShowWine}></Route>
            <Route path="/wines" component={WinesIndex}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/login" component={Login}></Route>
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
