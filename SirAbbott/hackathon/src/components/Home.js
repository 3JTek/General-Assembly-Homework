import React from 'react'
import { Link, withRouter } from 'react-router-dom'



const Home = () => {

  return(
    <section className="welcome-hero">
      <div className="container is-fluid">
        <p className="line anim-typewriter">Welcome to Brain training. Click below to play </p>
        <div>
          <hr />
          <Link className="train-link" to="/game">Train your brain</Link>
        </div>
      </div>

    </section>
  )
}

export default withRouter(Home)
