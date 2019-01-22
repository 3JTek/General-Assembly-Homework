import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (

    <nav className="navbar is-black" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">

      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item is-size-5">
        Home
          </Link>
          <Link to="/wineboreds" className="navbar-item is-size-5">
        Wines
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button">
                <strong>Login</strong>
              </a>
              <Link to="/wines/register" className="button">
                <strong>Register</strong>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Nav
