import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import 'bulma'
import './style.scss'

import Home from './components/Home'
import WinesIndex from './components/wines/WinesIndex'
import WinesShow from './components/wines/WinesShow'
import NavBar from './components/NavBar'
import Register from './components/auth/Register'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <NavBar />

          <Switch>
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
