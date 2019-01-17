import React from 'react'

const About = ({ data }) => {
  return(
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2>About</h2>
            {data.map((text, i) => <p key={i}>{text}</p>)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
