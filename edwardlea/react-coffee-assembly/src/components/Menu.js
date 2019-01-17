import React from 'react'

const Menu = (props) => {
  return(
    <section id="menus">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2>Menu</h2>
            {props.text.map((para, i) => <p key={i}> {para}</p>)}
            {props.links.map((link,i) => <a key={i} href="assets/menus/menu.pdf" target="_blank">{link}</a>)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu
