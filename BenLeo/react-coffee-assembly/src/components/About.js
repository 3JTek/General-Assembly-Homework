import React from 'react'

const About = (props) => {
  return(
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2>About</h2>
            {props.text.map((content, index) => <p key={index}>{content}</p>)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
