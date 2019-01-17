import React from 'react'


class Header extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      nav: ['Home', 'Gallery', 'Menu', 'About', 'Location']
    }
  }
  render() {
    return (
      <header>
        <nav className="container">
          <ul>
            {this.state.nav.map((nav, i) =>
              <li id={nav}key={i}><a href="#{nav}">{nav}</a>
              </li>
            )}
          </ul>
        </nav>
      </header>
    )
  }
}
export default Header
