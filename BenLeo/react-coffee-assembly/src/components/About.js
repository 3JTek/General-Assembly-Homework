import React from 'react'

const About = (props) => {
  return(
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2>About</h2>
            {props.text.map((line, index) =>
              <div key={index}>
                <h2>${line.name}</h2>
                <h4>${line.lineStatuses[0].statusSeverityDescription}</h4>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
