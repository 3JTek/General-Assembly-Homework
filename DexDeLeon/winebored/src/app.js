import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import 'bulma'
import './style.scss'

import Header from './components/Header'
import Home from './components/Home'
import WineList from './components/WineList'
import WineShow from './components/WineShow'

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
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
