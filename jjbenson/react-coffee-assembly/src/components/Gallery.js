import React from 'react'

const Gallery = ({title, images})=>{
  console.log(title, images)
  return (
    <section id="gallery">
      <div className="container">
        <h2>{title}</h2>
        <div className="row">
          {images.map((el,i) =>
            <div key={i} className="col-sm-4">
              <div key={i} className={'image ' + el}></div>
            </div>)}
        </div>
      </div>
    </section>
  )
}

export default Gallery
