import React from 'react'

class Gallery extends React.Component {
  constructor(){
    super()
    this.state = {
      title: 'Gallery',
      images: ['image image-one', 'image image-two', 'image image-three']
    }
  }
  render(){
    return(
      <section id="gallery">
        <div className="container">
          <h2>{this.state.title}</h2>
          <div className="row">
            {this.state.images.map((image, i) =>
              <div key={i} className="col-sm-4">
                <div className={image}></div>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default Gallery
