import React from 'react'

class Menu extends React.Component {
  render(){
    return (
      <section id="menus">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2>Menu</h2>
              {this.props.menu.text.map((data, i) => <p key={i}>
                {data}</p>)}
              {this.props.menu.links.map((data, i) => <div key={i}>
                <a href="">{data}</a></div>)}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Menu
