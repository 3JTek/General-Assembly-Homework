import React from 'react'

class About extends React.Component {
  render(){
    const {text} = this.props.text
    return(
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2>About</h2>
              {text.map((para,i) => <p key={i}>{para}</p>)}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About
