// Import the Language

import React from 'react'
import ReactDOM from 'react-dom'

// Import the styling libraries
import 'bulma'
import './style.scss'

// Import the navigation router witch contains switch
import {BrowserRouter, Route, Link, Switch } from 'react-router-dom'

// Import the components
import Home from './components/Home'
import WineIndex from './components/WineIndex'
import WineShow from './components/WineShow'

// Structure of the page with the interchangeable components (switch) depends on the router-dom
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <nav>
            <Link to ="/" >Homepage </Link>
            <Link to="/wines" > Wine List</Link>
          </nav>
          <Switch>
            <Route path="/wines/:id" component={WineShow} />
            <Route path="/wines" component={WineIndex} />
            <Route exact path="/" component={Home} />
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
