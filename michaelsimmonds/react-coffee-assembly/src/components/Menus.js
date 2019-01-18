import React from 'react'

class Menus extends React.Component {
  render() {
    return(
      <section id="menus">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2>Menu</h2>
              <p>{this.props.menuInfo}</p>
              <p>On weekends we serve brunch until 4pm.</p>
              {this.props.menuLinks.map(data => <a key={data}> {data} </a>)}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Menus
