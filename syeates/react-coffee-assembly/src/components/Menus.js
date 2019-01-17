import React from 'react'

class Menu extends React.Component {
  render() {
    return (
      <section id="menus">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2>Menu</h2>
              <p>We start early, with a breakfast menu including juices, pastries, pancakes, all kinds of eggs and freshly-roasted coffee. At 11.30am, we switch to our all-day menu.</p>
              <p>On weekends we serve brunch until 4pm.</p>
              <a href="assets/menus/menu.pdf" target="_blank">Breakfast</a>
              <a href="assets/menus/menu.pdf" target="_blank">Brunch</a>
              <a href="assets/menus/menu.pdf" target="_blank">All Day</a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Menu
