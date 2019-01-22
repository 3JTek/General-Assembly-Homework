import React from 'react'

import { Link } from 'react-router-dom'

class Header extends React.Component {

  clickHandler(e){
    // Get the target from the "data-target" attribute
    const target = e.target.dataset.target
    const $target = document.getElementById(target)

    console.log(e.target)
    console.log()

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    e.target.classList.toggle('is-active')
    $target.classList.toggle('is-active')

  }

  render(){
    return(
      <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="#">
              <h1 className="title is-1">WineBored</h1>
            </a>

            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navMenu" onClick={this.clickHandler}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>

          </div>
          <div className="navbar-menu" id="navMenu">

            <div className="navbar-end">
              <Link to="/" className="navbar-item">Home</Link>
              <Link to="/wines" className="navbar-item">Wines</Link>
              <Link to="/wines/new" className="navbar-item">Add Wine</Link>
              <Link to="/register" className="navbar-item">Register</Link>
              <Link to="/login" className="navbar-item">Log In</Link>
            </div>

          </div>
        </nav>
      </header>
    )
  }
}

export default Header
