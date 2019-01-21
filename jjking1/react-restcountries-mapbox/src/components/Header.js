import React from 'react'

const Header = ({ changeFilter }) => {
  return(
    <header className='header'>
      <h2> Show Flags by Region </h2>
      <form>
        <select className="menu" onChange={changeFilter}>
          <option value="all">All</option>
          <option value="Americas">America</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
        </select>
      </form>
    </header>
  )
}


export default Header
