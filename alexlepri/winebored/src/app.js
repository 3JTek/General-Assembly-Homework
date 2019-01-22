import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import 'bulma'
import './style.scss'




import WinesIndex from './components/wines/WinesIndex'
import Home from './components/Home'
import WinesShow from './components/wines/WinesShow'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import WinesNew from './components/wines/WinesNew'


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>

          <nav>
            <Link to="/"> Home </Link>
            <Link to="/wines"> Wines Index </Link>
            <Link to="/register"> Register </Link>
            <Link to="/login"> Login </Link>
            <Link to="/wines/new"> Wines New </Link>
          </nav>

          <Switch>
            <Route path="/wines/new" component={WinesNew} />
            <Route path="/wines/:id" component={WinesShow} />
            <Route path="/wines" component={WinesIndex} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
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
