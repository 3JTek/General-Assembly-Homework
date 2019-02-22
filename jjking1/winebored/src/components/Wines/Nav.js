import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return(
        <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
            <div className="container is-fluid">
              <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link className="navbar-item" to="/"> Home </Link>
                    <Link className="navbar-item" to="/wines"> All Wines </Link>
                    <Link className="navbar-item" to="/wines/new">New Wine </Link>
                </div>
                <div className="navbar-end">
                  <Link className="navbar-item" to="/register">Register</Link>
                  <Link className="navbar-item" to="/login">Login</Link>
                </div>
              </div>
            </div>
        </nav>
  )
}

export default Nav
