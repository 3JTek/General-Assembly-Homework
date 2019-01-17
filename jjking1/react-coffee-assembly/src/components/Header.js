import React from 'react'


class Header extends React.Component{
  constructor(){
    super()


    this.state = {
      links: [
        'Location',
        'About',
        'Menu',
        'Gallery',
        'Home'
      ]
    }
  }

  render(){
    return(
      <header>
        <nav className='container'>
          <ul>
            {this.state.links.map((link, i) => <li key={i}><a href='#'> {link} </a></li>) }
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
