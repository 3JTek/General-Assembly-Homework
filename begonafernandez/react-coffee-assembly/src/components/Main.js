import React from 'react'

import Hero from './Hero'
import Gallery from './Gallery'
import Menus from './Menus'
import About from './About'

const Main = (props) => {
  return (
    <main>
      <Hero />
      <Gallery />
      <Menus menus={props.menus}/>
      <About about={props.about}/>
    </main>
  )
}

export default Main
