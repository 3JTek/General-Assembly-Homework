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
            <a className="navbar-item" href="/wines">
              <img src="http://wineparadigm.com/wp-content/uploads/2018/05/pocket-wine-logo.png" width="28" height="28"/>
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
              <Link to="/wines" className="navbar-item">
                Wine List
              </Link>

            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-primary">
                    <strong>Sign up</strong>
                  </a>
                  <a className="button is-light">Log in</a>
                </div>
              </div>
            </div>
          </div>
        </nav>


      </header>
    )

  }
}

export default Header
