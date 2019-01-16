import React from 'react'

const Menus = ({links, text})=>{
  console.log(links, text)
  return (
    <section id="menus">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2>Menu</h2>
            {text.map((el,i) => <p key={i}>{el}</p>)}
            {links.map((el,i) => <a key={i} href={el.link} target="_blank" rel = "noopener noreferrer" >{el.menu}</a>)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menus
