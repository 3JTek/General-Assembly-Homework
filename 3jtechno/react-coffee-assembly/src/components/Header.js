import React from 'react'

import Button from './Button'

class Header extends React.Component{
  constructor(){
    super()
    this.state = {
      links: [
        {
          url: '#location',
          text: 'Location'
        },
        {
          url: '#about',
          text: 'About'
        },
        {
          url: '#menus',
          text: 'Menu'
        },
        {
          url: '#gallery',
          text: 'Gallery'
        },
        {
          url: '#hero',
          text: 'Home'
        }
      ]
    }
  }

  render(){
    return(
      <header>
        <nav className="container">
          <ul>
            {this.state.links.map(({url, text}, i) => <li key={i}><Button url={url} text={text} target="_blank"/></li>)}
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
