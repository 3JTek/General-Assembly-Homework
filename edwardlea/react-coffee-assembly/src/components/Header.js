import React from 'react'

const Header = (props) => {
  console.log(props)
  return(
    <header>
      <nav className="container">
        <ul>
          {props.nav.map((item,i) =>
            <li key={i}>
              <a href={'"#'+item.toLowerCase()+'"'}>{item}</a>
            </li>)}
        </ul>
      </nav>
    </header>
  )
}

export default Header
