import React from 'react'


class Header extends React.Component {

  render() {
    return (
      <header>
        <nav className="container">
          <ul>
            {this.props.navLinks.map((link, i) => <li key={i}><a href='#'> {link} </a></li>)}
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
