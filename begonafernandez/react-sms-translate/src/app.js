import React from 'react'
import ReactDOM from 'react-dom'
// import axios from 'axios'
import 'bulma'


class App extends React.Component{
  render() {
    return(
      <section className="hero is-dark">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1">The SMS translater</h1>
            <p>Want to send a message to a friend that speaks another language?</p>
            <p>Let us help</p>
          </div>
        </div>
      </section>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
