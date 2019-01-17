import React from 'react'


class About extends React.Component  {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2>About</h2>
              {this.props.about.text.map((about, i) => <p key={i}>{about}</p>)}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About
