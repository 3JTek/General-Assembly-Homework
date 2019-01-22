import React from 'react'
import {Link} from 'react-router-dom'

class NavBar extends React.Component {

  componentDidMount(){
    document.addEventListener('DOMContentLoaded', () => {

      // Get all "navbar-burger" elements
      const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)

      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach( el => {
          el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target
            const $target = document.getElementById(target)

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active')
            $target.classList.toggle('is-active')

          })
        })
      }
    })
  }

  render(){
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4iDwMTT8v7LW3X5-SvIVH_CAFo7M-gPR5qKwXPqbWmOcXwdjArA" width="112" height="28"/>
          </Link>
          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="/wines">
              Wines
            </Link>
            <Link className="navbar-item" to="/register">
              Register
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar
