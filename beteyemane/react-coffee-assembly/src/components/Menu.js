import React from 'react'


class Menu extends React.Component  {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section id="menus">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2>Menu</h2>
              {this.props.menus.text.map((menu, i) => <p key={i}> {menu}</p>)}{this.props.menus.links.map((links , i) => <a key={i} href="assets/menus/menu.pdf" target="_blank">{links}</a>)}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Menu
