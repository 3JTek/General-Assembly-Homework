import React from 'react'

const Header = (props) => {
  return (
    <header>
      <nav className="container">
        <ul>
          {props.nav.reverse().map((link, index) =>
            <li key={index}>
              <a href={'#' + link.toLowerCase()}>{link}</a>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header
