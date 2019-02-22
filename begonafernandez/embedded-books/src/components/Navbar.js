import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      navbarOpen: false
    }

    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  toggleNavbar() {
    this.setState({ navbarOpen: !this.state.navbarOpen})
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({ navbarOpen: false })
    }
  }

  render() {
    return (
      <nav className="navbar is-dark">
        <div className="container">
          <div className="navbar-brand">

            <Link className="navbar-item" to="/">
              <strong>Embedded apis-Books</strong>
            </Link>

            <a className={`navbar-burger ${this.state.navbarOpen ? 'is-active' : ''}`} onClick={this.toggleNavbar}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className={`navbar-menu ${this.state.navbarOpen ? 'is-active' : ''}`}>
            <div className="navbar-end">
              <Link className="navbar-item" to="/books">Discover our Books</Link>
              <Link className="navbar-item" to="/books/new">Add a Book</Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)
