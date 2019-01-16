import React from 'react'

class Menus extends React.Component {
  render() {

const links = this.props.atags

    return (
      <section id='menus'>
        <div className='container'>
          <div className='row'>
            {links.map((link, i) =>
              <a href='assets/menus.menu.pdf' key={i}>{link}</a>
            )
            }
            <div className='col-sm-12'>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Menus
