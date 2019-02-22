import React from 'react'
import ReactDOM from 'react-dom'

import bulma from 'bulma'
import './style.scss'

import { BrowserRouter, Route, Switch} from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import EventsIndex from './components/events/EventsIndex'
import EventsShow from './components/events/EventsShow'


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>

        <main>
          <Navbar />

          <Switch>
            <Route path="/events/:id" component={EventsShow} />
            <Route exact path="/events" component={EventsIndex}>Events</Route>
            <Route path="/" component={Home}>Home</Route>
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
