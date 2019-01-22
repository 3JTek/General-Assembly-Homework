import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  constructor() {
    super()

    this.state = {
      isActive: false
    }

    this.toggleNav = this.toggleNav.bind(this)
  }

  toggleNav() {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  render() {
    return(
      <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" onClick={this.toggleNav}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className={ this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div className="navbar-start">
            <Link to='/'className="navbar-item">Home</Link>
            <Link to='/wines'className="navbar-item">Wine List</Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link to="/wines/register" className="button is-link">
                  <strong>Register</strong>
                </Link>
                <Link to="/wines/login" className="button is-light">
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar
