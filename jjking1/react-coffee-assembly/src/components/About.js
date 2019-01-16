import React from 'react'

const About = ({text}) => {
  return(
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2>About</h2>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
