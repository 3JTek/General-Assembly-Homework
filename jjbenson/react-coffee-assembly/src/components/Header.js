import React from 'react'

const Header = ({ navbar })=>{
  return (
    <header>
      <nav className='container'>
        <ul>
          {navbar.map((el,i) => <li key={i}><a href={el.link}>{el.content}</a></li>)}
        </ul>
      </nav>
    </header>
  )
}

export default Header
