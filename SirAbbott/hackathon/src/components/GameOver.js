import React from 'react'
import { Link } from 'react-router-dom'

import HighScore from './common/HighScore'

class GameOver extends React.Component {

  constructor() {
    super()

    this.state = {
      name: '',
      score: ''
    }

    this.highScores= JSON.parse(localStorage.getItem('scores'))
    // this.highScores = [{name: 'CPU', score: 1}]
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    e.button.disabled = true
    const newHighScore = new HighScore.newHighScore(this.state.name, this.state.score)
    for(let i=0; i<this.highScores.length; i++) {
      if (this.props.score > this.highScores[i].score) {
        this.highScores.splice(i, 0, newHighScore)
        if (this.highScores.length > 10) {
          this.highScores.pop()
        }
        localStorage.setItem('scores', JSON.stringify(this.highScores))
        break
      }
    }
  }

  handleChange({ target: { value }}){
    this.setState({ name: value, score: this.props.score})
    console.log(this.state.name)
  }

  render() {
    console.log(this.props.score)
    return(
      <div className="gameover-screen">
        <div className="columns">
          <div className="column">
            <h2>Game Over!</h2>
            <h3 className="">Your score was {this.props.score}</h3>

            <form onSubmit={this.handleSubmit}>
              <p>Enter your name</p>
              <input onChange={this.handleChange} type="text" name="userName" placeholder="Your name here" value={this.state.name} autoFocus />
              <button className="button is-primary">Submit</button>
            </form>
          </div>
          <div className="column">
            <div>
              <p> High scores </p>
              {this.highScores.map((score, index) => <div key={index}>{score.name}...{score.score}</div>)}
            </div>
          </div>
        </div>
        <Link className="play-again" to="/" > Play Again </Link>
      </div>
    )
  }
}

export default GameOver
