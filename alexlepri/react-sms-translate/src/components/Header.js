import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>{this.props.message}</h1>
        <h2>Hello {this.props.name}</h2>
      </header>
    )
  }
}

export default Header
