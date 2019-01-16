import React from 'react'

class About extends React.Component {
  render(){
    return (
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2>About</h2>
              {this.props.about.text.map((data, i) => <p key={i}>
                {data}</p>)}
              <p></p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About
