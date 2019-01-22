import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return(
        <nav className="navbar has-background-dark" role="navigation" aria-label="main navigation">
            <div className="container">
              <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link className="navbar-item has-text-white" to="/"> Home </Link>
                    <Link className="navbar-item has-text-white" to="/wines"> All Wines </Link>
                </div>
                <div className="navbar-end">
                    <a className="navbar-item has-text-white" href="#">Login</a>
                </div>
              </div>
            </div>
        </nav>
  )
}

export default Nav
