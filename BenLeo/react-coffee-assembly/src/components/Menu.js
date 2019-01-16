import React from 'react'

const Menu = (props) => {
  return(
    <section id="menus">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2>Menu</h2>
            {props.text.map((content, index) => <p key={index}>{content}</p>)}

            {props.links.map((content, index) => <a href="assets/menus/menu.pdf" target="_blank" key={index}>{content}</a>)}
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu
