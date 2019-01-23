import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import 'bulma'
import './style.scss'

import Header from './components/Header'
import Home from './components/Home'
import WineList from './components/wines/WineList'
import WineShow from './components/wines/WineShow'
import AddWine from './components/wines/AddWine'
import EditWine from './components/wines/EditWine'
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
            <Route path="/wines/new" component={AddWine} />
            <Route path="/login" component={Login} />
            <Route path="/wines/:id/edit" component={EditWine} />
            <Route path="/wines/:id" component={WineShow} />
            <Route path="/wines" component={WineList} />
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
