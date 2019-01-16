import React from 'react'

const Menus = ({ menus }) => {
  return(
    <section id="menus">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2>Menu</h2>
            {menus.text.map((sentence, i) => <p key={i}>{sentence}</p>)}
            {menus.links.map((link, i) => <a key={i} href="assets/menus/menu.pdf" target="_blank">{link}</a>)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menus
