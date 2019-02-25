import React from 'react'

class Header extends React.Component{
  render(){
    return(
      <header>
        <nav className='container'>
          <ul>
            {this.props.navLinks.map((data,index) => <li key={index} ><a href={'#'+ data.toLowerCase()}> {data}</a></li>)}
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
