import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bulma'
import './style.scss'

import Home from './components/Home'
import Register from './components/auth/Register'
import WineboredsIndex from './components/WineboredsIndex'
import WinesShow from './components/WinesShow'
import Nav from './components/Nav'

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <main>
          <nav>
            <Nav />
          </nav>
          <Switch>
            <Route path="/wines/register" component={Register}/>
            <Route path="/wines/:id" component={WinesShow}/>
            <Route path="/wineboreds" component={WineboredsIndex}/>
            <Route exact path="/" component={Home}/>
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
