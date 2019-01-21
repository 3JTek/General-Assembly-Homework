import React from 'react'
import {Link} from 'react-router-dom'


const Header = () => {
  return(
    <nav>
      <Link to="/">Home</Link>
      <Link to="/wines">Wines</Link>
    </nav>
  )
}

export default Header
