import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (

    <nav className="navbar is-white" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">

      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item is-size-5 button">
          Home
          </Link>
          <Link to="/events" className="navbar-item is-size-5 button">
        Events
          </Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
