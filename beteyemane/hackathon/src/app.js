import React from 'react'
import ReactDOM from 'react-dom'
import EventsIndex from './components/EventsIndex'
import NavBar from './components/NavBar'
import './style.scss'
import Home from './components/Home'
import EventsShow from './components/EventsShow'
import EventsTown from './components/EventsTown'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends React.Component {
  constructor() {
    super()
  }


  render() {


    return (
      <BrowserRouter>
        <main>
          <NavBar />
          <Switch>
            <Route path="/events/:town/:id" component={EventsShow}/>
            <Route path="/events/:town" component={EventsTown}/>
            <Route path="/events/" component={EventsIndex}/>
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
