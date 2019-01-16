import React from 'react'

const About = ({title,text})=>{
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2>{title}</h2>
            {text.map((el,i) => <p key={i}>{el}</p>)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
