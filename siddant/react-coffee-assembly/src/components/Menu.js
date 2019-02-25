import React from 'react'

class Menu extends React.Component{
  render(){
    return(
      <section id="menus">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2>Menu</h2>
              <p>{this.props.data.text}</p>
              <p>On weekends we serve brunch until 4pm.</p>
              {this.props.data.links.map(data => <a key={data} href="assets/menus/menu.pdf" target="_blank"> {data}</a>)}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Menu
