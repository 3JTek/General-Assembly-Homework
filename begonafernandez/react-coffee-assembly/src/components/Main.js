import React from 'react'

import Hero from './Hero'
import Gallery from './Gallery'
import Menus from './Menus'
import About from './About'

class Main extends React.Component {
  render() {
    return (
      <main>
        <Hero />
        <Gallery />
        <Menus menus={this.props.menus}/>
        <About about={this.props.about.text}/>
      </main>
    )
  }
}

export default Main
