import React from 'react'


class Menu extends React.Component {
  render () {
    return (
      <section id="menus">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2>Menu</h2>

              <p>{this.props.text}</p>
              <ul>
                {this.props.links.map((links, i) => <a key={i} href="">{links}</a>)}
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Menu
