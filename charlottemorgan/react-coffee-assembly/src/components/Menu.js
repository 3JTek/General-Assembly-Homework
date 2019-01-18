import React from 'react'

const Menu = (props) => {
  return(
    <section id="menus">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2>Menu</h2>
            {props.menus.text.map((text, i) =>
              <p key={i}>{text}</p>)}
            {props.menus.links.map((links ,i) =>
              <a key={i} href="assets/menus/menu.pdf" target="_blank">{links}</a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
export default Menu
