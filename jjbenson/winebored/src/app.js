import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

// import 'bulma'
import './style.scss'

import Home from './components/Home'
import Footer from './components/Footer'
import Header from './components/Header'
import WinesIndex from './components/WinesIndex'
import WineShow from './components/WineShow'

class App extends React.Component {


  render() {
    return (
      <BrowserRouter>
        <main>
          <Header />
          <Switch>
            <Route path="/wines/:id" component={WineShow} />
            <Route path="/wines" component={WinesIndex} />
            <Route path="/" component={Home} />

          </Switch>
          <Footer />
        </main>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
