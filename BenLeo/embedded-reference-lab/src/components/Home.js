import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title is-1">Home</h1>
        <Link to={'/posts'}>
          <h2>Posts Index</h2>
        </Link>
      </div>
    </section>
  )
}

export default Home
