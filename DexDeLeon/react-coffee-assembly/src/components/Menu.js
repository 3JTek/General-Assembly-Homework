import React from 'react'

const Menu = (props) => {
  return(
    <section id="menus">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2>Menu</h2>
            {props.menus.text.map((para, index) =>
              <p key={index}>{para}</p>
            )}
            {props.menus.links.map((link, index) =>
              <a href="assets/menus/menu.pdf" target="_blank" key={index}>{link}</a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu
