import React from 'react'

class About extends React.Component {
  render() {

    //const texts = this.props.about.text
    const {text} = this.props.about

    return(
      <section id='about'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <h2>About</h2>
              {text.map((para, i)=>
                <p key={i}>
                  {para}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About
