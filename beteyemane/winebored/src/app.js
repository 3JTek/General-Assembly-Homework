import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import 'bulma'
import './style.scss'


import Home from './components/Home'
import WineboredsIndex from './components/WineboredsIndex'
import WineboredsShow from './components/WineboredsShow'
import Nav from './components/Nav'

class App extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <BrowserRouter>
        <main>
          <nav>
            <Nav />
          </nav>
          <Switch>
            <Route path="/wineboreds/:id" component={WineboredsShow}/>
            <Route path="/wineboreds" component={WineboredsIndex}/>
            <Route path="/" component={Home}/>
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
