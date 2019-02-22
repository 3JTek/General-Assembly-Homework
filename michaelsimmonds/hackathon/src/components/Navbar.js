import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">

        <div className="navbar-brand">
          <Link className="navbar-item" to="/"><strong>Home</strong></Link>
        </div>

        <div className="navbar-end">
          <Link className="navbar-item" to="/Events"><strong>Discover</strong></Link>
        </div>

      </div>
    </nav>
  )
}

export default withRouter(Navbar)
