import React from 'react'

// class Nav extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       nav: ['Location', 'About', 'Menu', 'Gallery', 'Home']
//     }
//   }
//
//   render() {
//     return(
//       <header>
//         <nav className="container">
//           <ul>
//             {this.state.nav.map((item, nav) => <li id={item}key={nav}><a href="#{item}">{item}</a></li>)}
//           </ul>
//         </nav>
//       </header>
//
//     )
//   }
// }
//
// export default Nav


const Nav = (props) => {
  return(
    <header>
      <nav className="container">
        <ul>
          {props.nav.map((item, i) => <li id={item}key={i}><a href={'#'+ item.toLowerCase()}>{item}</a></li>)}
        </ul>
      </nav>
    </header>
  )
}

export default Nav