import React from 'react'

const NavHeader = (props) => {
  return (
    <header>
      <nav className='container'>
        <ul>
          {props.links.map(link => <li key={link}><a href={'#' + link}>{link}</a></li>)}
        </ul>
      </nav>
    </header>
  )
}

export default NavHeader
