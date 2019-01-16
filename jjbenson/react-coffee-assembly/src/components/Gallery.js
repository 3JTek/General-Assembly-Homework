import React from 'react'

const Gallery = ({images})=>{
  console.log(images)
  return (
    <section id="gallery">
      <div className="container">
        <h2>Gallery</h2>
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
