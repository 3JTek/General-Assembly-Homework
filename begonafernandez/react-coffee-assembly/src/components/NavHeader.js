import React from 'react'

const NavHeader = ({ links }) => {
  const linksR = links.reverse()
  return (
    <header>
      <nav className='container'>
        <ul>
          {linksR.map(link => <li key={link}><a href={'#' + link}>{link}</a></li>)}
        </ul>
      </nav>
    </header>
  )
}

export default NavHeader
