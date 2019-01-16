import React from 'react'

const Header = ({ navbar })=>{
  console.log(navbar)
  return (
    <header>
      <nav className="container">
        <ul>
          {navbar.map((el,i) => <li key={i}><a href={el.link}>{el.nav}</a></li>)}
        </ul>
      </nav>
    </header>
  )
}

export default Header
