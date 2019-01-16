import React from 'react'

const Menu = ({ links, text }) => {
  return(
    <section id="menus">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2>Menu</h2>
            <p>{text}</p>
            {links.map((link,i) => <a key={i} href="#"> {link}</a>)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu
