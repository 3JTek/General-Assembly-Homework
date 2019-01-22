import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

// import 'bulma'
import './style.scss'

import Auth from './lib/Auth'


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

  constructor(){
    super()
    this.state = {
      loggedIn: false
    }
    if(Auth.getToken()){
      this.state.loggedIn = true
    }



    this.handleLogout = this.handleLogout.bind(this)
    this.handleLogIn = this.handleLogIn.bind(this)
  }

  handleLogIn(token){
    Auth.setToken(token)
    this.setState({loggedIn: true})
    console.log('handleLogin')

  }
  handleLogout(){
    Auth.signOut()
    this.setState({loggedIn: false})
  }



  render() {
    const MyLogIn = (props) => {
      return (
        <Login
          handleLogIn={this.handleLogIn}
          {...props}
        />
      )
    }
    const MyWineShow = (props) => {
      return (
        <WineShow
          loggedIn={this.state.loggedIn}
          {...props}
        />
      )
    }
    return (
      <BrowserRouter>
        <main>
          <Header
            handleLogout={this.handleLogout}
            loggedIn={this.state.loggedIn}
          />
          <Switch>
            <Route path="/wines/new" component={WineNew} />
            <Route path="/wines/:id/edit" component={WineEdit} />
            <Route path="/wines/:id" component={MyWineShow} />
            <Route path="/wines" component={WinesIndex} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={MyLogIn}  />
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
