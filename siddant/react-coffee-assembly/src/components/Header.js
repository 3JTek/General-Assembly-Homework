import React from 'react'

class Header extends React.Component{
  constructor(){
    super()
    this.state = {
      nav: ['HOME','GALLERY', 'MENU','ABOUT','LOCATION']
    }
  }
  render(){
    return(
      <header>
        <nav className={this.props.navigationName}>
          <ul>
            {this.state.nav.map((data,index) => <li key={index} ><a href="#{data}"> {data}</a></li>)}
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
