import React from 'react'

const Gallery = ({ gallery }) => {
  return (
    <section id='gallery'>
      <div className="container">
        <h2>Gallery</h2>
        <div className="row">
          {gallery.map((elem, i) =>
            <div className="col-sm-4" key={i}>
              <div className={'image image-' + elem}></div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Gallery
