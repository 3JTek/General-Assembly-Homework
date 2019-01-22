import React from 'react'

import { Link } from 'react-router-dom'

class Header extends React.Component {
  render(){
    return(
      <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="#">
              <h1 className="title is-1">WineBored</h1>
            </a>

            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" onClick={this.clickHandler}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>

          </div>
          <div className="navbar-menu" id="navMenu">

            <div className="navbar-end">
              <Link to="/" className="navbar-item">Home</Link>
              <Link to="/wines" className="navbar-item">Wines</Link>
            </div>

          </div>
        </nav>
      </header>
    )
  }
}

export default Header
