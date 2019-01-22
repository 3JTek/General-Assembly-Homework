import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return(
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">

        <Link to="https://bulma.io" className="navbar-item" >
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
        </Link>

        <Link to="" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Link>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to='/' className="navbar-item">Home</Link>
          <Link to='/wines' className="navbar-item">List Of Wine</Link>
        </div>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <Link to="/register" className="button is-primary">
              <strong>Register</strong>
            </Link>
            <Link to="/login" className="button is-light">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
