import React from 'react'

class Header extends React.Component {
  render(){
    return (
      <header>
        <nav className="container">
          <ul>
            {this.props.navLinks.map((data, i) => <li key={i}>
              <a href="">{data}</a>
            </li>)}
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
