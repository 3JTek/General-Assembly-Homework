import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import 'bulma'
import './style.scss'

import Navbar from './components/commons/Navbar'
import Home from './components/Home'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import WinesIndex from './components/wines/WinesIndex'
import WinesShow from './components/wines/WinesShow'
import WinesNew from './components/wines/WinesNew'
import WinesEdit from './components/wines/WinesEdit'
import SecureRoute from './components/commons/SecureRoute'
import FlashMessage from './components/commons/FlashMessage'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>

          <Navbar/>
          <FlashMessage/>

          <Switch>
            <SecureRoute path="/wines/:id/edit" component={WinesEdit} />
            <SecureRoute path="/wines/new" component={WinesNew} />
            <Route path="/wines/:id" component={WinesShow} />
            <Route path="/wines" component={WinesIndex} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path='/' component={Home} />
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
