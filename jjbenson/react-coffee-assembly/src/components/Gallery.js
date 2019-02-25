import React from 'react'

//This is a class for practice
class Gallery extends React.Component{
  render(){
    //Destructure props
    const {title, images} = this.props
    return (
      <section id='gallery'>
        <div className='container'>
          <h2>{title}</h2>
          <div className='row'>
            {images.map((el,i) =>
              <div key={i} className='col-sm-4'>
                <div key={i} className={'image ' + el}></div>
              </div>)}
          </div>
        </div>
      </section>
    )
  }
}

export default Gallery
