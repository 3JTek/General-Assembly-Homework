import React from 'react'
import {Link} from 'react-router-dom'

import Auth from '../../lib/Auth'

class Navbar extends React.Component {
  constructor(){
    super()
    this.state = {
      navbarOpen: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e){
    e.preventDefault()
    this.setState({navbarOpen: !this.state.navbarOpen})
  }

  render(){
    return(
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">

          <Link to="/" className="navbar-item" >
            <h1 className="title is-2">WineBored</h1>
          </Link>

          <a className={`navbar-burger burger ${this.state.navbarOpen ? 'is-active': ''}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={this.handleClick}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className={`navbar-menu ${this.state.navbarOpen? 'is-active': ''}`}>
          <div className="navbar-end">
            <Link to='/' className="navbar-item">Home</Link>
            <Link to='/wines' className="navbar-item">List Of Wine</Link>
            {Auth.isAuthenticated() && <Link to='/wines/new' className="navbar-item">Add Wine</Link>}
            {!Auth.isAuthenticated() &&
              <div className="buttons">
                <Link to="/register" className="button is-primary">
                  <strong>Register</strong>
                </Link>
                <Link to="/login" className="button is-light">
                  Log in
                </Link>
              </div>
            }
          </div>
        </div>
      </nav>
    )
  }
}
export default Navbar
