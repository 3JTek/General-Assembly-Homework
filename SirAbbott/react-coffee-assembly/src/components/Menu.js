import React from 'react'

const Menu = (props) => {
  const {links, text} = props.data
  return(
    <section id="menus">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2>Menu</h2>
            <p>{text[0]}</p>
            <p>{text[1]}</p>
            <a href="assets/menus/menu.pdf" target="_blank">{links[0]}</a>
            <a href="assets/menus/menu.pdf" target="_blank">{links[1]}</a>
            <a href="assets/menus/menu.pdf" target="_blank">{links[2]}</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu
