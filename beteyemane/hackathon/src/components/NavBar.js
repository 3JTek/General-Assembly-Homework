import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (

    <nav className="navbar is-white" role="navigation" aria-label="main navigation">
      <div className="navbar-start">
        <div className="navbar-item">
        <div className="buttons">
          <Link to="/" className="button is-black">
          Home
          </Link>
          <Link to="/events" className="button is-black">
        Events
          </Link>
        </div>
        <div className="navbar-end">
            </div>
          </div>
          </div>
    </nav>
  )
}

export default NavBar
