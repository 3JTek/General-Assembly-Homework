import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import 'bulma'
import './style.scss'

import Header from './components/Header'
import Home from './components/Home'
import WinesIndex from './components/wines/WinesIndex'
import WineShow from './components/wines/WineShow'
import WinesNew from './components/wines/WinesNew'
import WinesEdit from './components/wines/WinesEdit'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/wines/new" component={WinesNew} />
            <Route path="/login" component={Login} />
            <Route path="/wines/:id/edit" component={WinesEdit} />
            <Route path="/wines/:id" component={WineShow} />
            <Route path="/wines" component={WinesIndex} />
            <Route path="/" component={Home} />
          </Switch>

        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
