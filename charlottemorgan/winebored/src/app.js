import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import 'bulma'
import './style.scss'

import Home from './components/Home.js'
import WinesIndex from './components/wines/WinesIndex.js'
import WinesShow from './components/wines/WinesShow.js'
import WinesNew from './components/wines/WinesNew.js'
import WineEdit from './components/wines/WineEdit.js'
import Register from './components/auth/Register.js'
import Login from './components/auth/Login.js'


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>

          <nav>
            <Link to="/">Home </Link>
            <Link to="/wines"> Wines</Link>
            <Link to="/register"> Register</Link>
            <Link to="/login"> Login</Link>
            <Link to="/wines/new"> Add Wine</Link>
            <Link to="/wines/:id"></Link>
          </nav>
          <Switch>
            <Route path="/wines/:id/edit" component={WineEdit} />
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
