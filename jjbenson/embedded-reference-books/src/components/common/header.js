import React from 'react'

import { Link } from 'react-router-dom'


class Header extends React.Component{

  componentDidMount(){
    const el = document.querySelector('.navbar-burger')
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target
      const $target = document.getElementById(target)

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active')
      $target.classList.toggle('is-active')

    })
  }

  render(){
    return(
      <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="/books">
              <img src="https://images.vexels.com/media/users/3/140908/isolated/preview/bdc30bbe3c022a11e2d7fd0e642c61ae-open-book-icon-by-vexels.png" width="28" height="28"/>
            </a>
            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <Link to="/" className="navbar-item">
                Home
              </Link>
              <Link to="/books" className="navbar-item">
                Book List
              </Link>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header
