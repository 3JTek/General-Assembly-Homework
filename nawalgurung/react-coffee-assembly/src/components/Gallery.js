import React from 'react'

const Gallery = () =>{
  return (
    <section id="gallery">
      <div className="container">
        <h2>Gallery</h2>
        <div className="row">
          <div className="col-sm-4">
            <div className="image image-one"></div>
          </div>
          <div className="col-sm-4">
            <div className="image image-two"></div>
          </div>
          <div className="col-sm-4">
            <div className="image image-three"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
