import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <p>Home</p>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Navbar)
