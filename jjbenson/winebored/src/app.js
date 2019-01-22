import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

// import 'bulma'
import './style.scss'

import Home from './components/Home'
import Footer from './components/Footer'
import Header from './components/Header'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import WinesIndex from './components/wines/WinesIndex'
import WineNew from './components/wines/WineNew'
import WineEdit from './components/wines/WineEdit'
import WineShow from './components/wines/WineShow'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Header />
          <Switch>
            <Route path="/wines/new" component={WineNew} />
            <Route path="/wines/:id/edit" component={WineEdit} />
            <Route path="/wines/:id" component={WineShow} />
            <Route path="/wines" component={WinesIndex} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
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
