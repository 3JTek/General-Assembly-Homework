import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4iDwMTT8v7LW3X5-SvIVH_CAFo7M-gPR5qKwXPqbWmOcXwdjArA" width="112" height="28"/>
        </Link>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Home
          </Link>
          <Link className="navbar-item" to="/wines">
            Wines
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
