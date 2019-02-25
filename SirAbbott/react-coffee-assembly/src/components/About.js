import React from 'react'

const About = (props) => {
  console.log(props)
  return(
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2>About</h2>
            <p>{props.text[0]}</p>
            <p>{props.text[1]}</p>
            <p>{props.text[2]}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
