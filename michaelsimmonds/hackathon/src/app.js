import React from 'react'
import ReactDOM from 'react-dom'

import bulma from 'bulma'
import './style.scss'

import { BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import EventsIndex from './components/events/EventsIndex'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>

        <Switch>
          <Route path="/events" component={EventsIndex}>Events</Route>
          <Route path="/" component={Home}>Home</Route>
        </Switch>

      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
