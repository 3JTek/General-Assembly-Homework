import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return(
        <nav className="navbar has-background-dark" role="navigation" aria-label="main navigation">
            <div className="container is-fluid">
              <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link className="navbar-item has-text-white" to="/"> Home </Link>
                    <Link className="navbar-item has-text-white" to="/wines"> All Wines </Link>
                    <Link className="navbar-item has-text-white" to="/wines/new">New Wine </Link>
                </div>
                <div className="navbar-end">
                  <Link className="navbar-item has-text-white" to="/register">Register</Link>
                  <Link className="navbar-item has-text-white" to="/login">Login</Link>
                </div>
              </div>
            </div>
        </nav>
  )
}

export default Nav
