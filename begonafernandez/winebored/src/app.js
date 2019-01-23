import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import 'bulma'
import './style.scss'

import Home from './components/Home'
import WinesIndex from './components/wines/WinesIndex'
import WinesShow from './components/wines/WinesShow'
import WinesNew from './components/wines/WinesNew'
import WineEdit from './components/wines/WineEdit'
import NavBar from './components/NavBar'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <NavBar />

          <Switch>
            <Route path='/wines/edit/:id' component={WineEdit} />
            <Route path='/wines/new' component={WinesNew} />
            <Route path='/wines/login' component={Login} />
            <Route path='/wines/register' component={Register} />
            <Route path='/wines/:id' component={WinesShow} />
            <Route path='/wines' component={WinesIndex} />
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
