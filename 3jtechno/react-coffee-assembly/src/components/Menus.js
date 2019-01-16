import React from 'react'

const Menus = ({data: {links}, data: {text}}) => {
  return(
    <section id="menus">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2>menus</h2>
            {text.map((text, i) => <p key={i}>{text}</p>)}
            {links.map((link, i) => <a key={i} href="assets/menus/menu.pdf" target="_blank">{link}</a>)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menus
