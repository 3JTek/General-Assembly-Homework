import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return(
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-start">
        <Link to='/'className="navbar-item">Home</Link>
        <Link to='/wines'className="navbar-item">Wine List</Link>
      </div>
    </nav>
  )
}

export default NavBar
