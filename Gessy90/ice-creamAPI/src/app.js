import React from 'react'
import ReactDOM from 'react-dom'

import 'bulma'
import './style.scss'

import {BrowserRouter, Route, Switch } from 'react-router-dom'


import GelatosIndex from './components/gelatos/GelatosIndex'
import GelatosShow from './components/gelatos/GelatosShow'



class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>

          <Switch>
            <Route path="/gelatos/:id" component={GelatosShow} />
            <Route path="/gelatos" component={GelatosIndex} />

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
