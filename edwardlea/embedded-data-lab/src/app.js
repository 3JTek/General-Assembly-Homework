import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch } from 'react-router-dom'

import RestaurantsIndex from './components/restaurants/restaurantsIndex'
import Navbar from './components/common/Navbar'
import RestaurantsShow from './components/restaurants/restaurantsShow'
import Home from './components/Home'

import 'bulma'


class App extends React.Component {
  constructor(){
    super()

    this.state = {
      restaurants: []
    }
  }

  render(){
    if(!this.state) return null
    return(
      <BrowserRouter>
        <main>
          <Navbar / >
          <Switch>
            <Route path="/restaurants/:id" component={RestaurantsShow} />
            <Route path="/restaurants" component={RestaurantsIndex} />
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
