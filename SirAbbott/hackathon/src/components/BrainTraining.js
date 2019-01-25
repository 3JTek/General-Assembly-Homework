import React from 'react'

import { Link } from 'react-router-dom'

import axios from 'axios'


import '../style.scss'

class BrainTraining extends React.Component {
  constructor(props) {
    super(props)

    this.state={
      questions: {},
      gameOver: false,
      score: 0
    }

    this.answers = []

    this.createAnswers = this.createAnswers.bind(this)
    this.checkWin = this.checkWin.bind(this)
    this.nextQuestion = this.nextQuestion.bind(this)
    this.checkGameOver = this.checkGameOver.bind(this)
    this.iterateScore = this.iterateScore.bind(this)
  }

  componentDidMount() {
    axios.get(`https://opentdb.com/api.php?amount=2&category=${this.props.category}&difficulty=${this.props.difficulty}&type=multiple&encode=url3986`)
      .then(res => this.setState({ questions: res.data.results }))

  }

  createAnswers() {
    this.answers = [...this.state.questions[0].incorrect_answers]
    const randomNo = Math.floor(Math.random() * this.answers.length)
    this.answers.splice(randomNo, 0, this.state.questions[0].correct_answer)
  }

  iterateScore() {
    const newScore = this.state.score + 1
    this.setState({ score: newScore })
  }

  checkWin(e) {

    if(e.target.value === this.state.questions[0].correct_answer) {
      console.log('Correct')
      this.div.style.border= '3px solid green'
      this.div.innerHTML = 'Correct'
      this.iterateScore()
      setTimeout(() => this.nextQuestion(), 1000)

    } else {
      console.log('Wrong')
      this.div.style.border= '3px solid red'
      this.div.innerHTML = `Incorrect, the right answer was ${decodeURIComponent(this.state.questions[0].correct_answer)}`
      setTimeout(() => this.nextQuestion(), 1500)

    }
  }

  clearAnswerBox(){
    this.div.style.border = ''
    this.div.innerHTML = ''
  }

  checkGameOver() {
    if(this.state.questions.length === 0) {
      console.log('Game Over')
      const over = true
      this.setState({ gameOver: over })
      console.log('GAMEOVER', this.state.gameOver)
    } else {
      this.clearAnswerBox()

    }
  }

  nextQuestion() {
    const data = this.state.questions.slice(1)
    this.setState({ questions: data }, this.checkGameOver)
  }


  render() {

    if(!this.state.questions.length && !this.state.gameOver) return null
    if (this.state.gameOver) return(
      <div className="gameover-screen">
        <h2>Game Over</h2>
        <h3><strong>Your score was {this.state.score}</strong></h3>
        <Link className="play-again" to="/"> Play Again </Link>
      </div>
    )
    this.createAnswers()
    return(
      <div>

        <div className="question-container">

          <div className="questionBox">
            <p>{decodeURIComponent(this.state.questions[0].question)}</p>
          </div>

          <div className="button-container">
            {this.answers.map( (answer, i) =>
              <button key={i} value={answer} onClick={this.checkWin}>{decodeURIComponent(answer)}</button>
            )}
          </div>

          <div className="answerBox" ref={el => this.div = el} />

          <div>
            <p>Your score:</p>
            <p>{this.state.score}</p>
          </div>
        </div>



      </div>
    )
  }
}
export default BrainTraining
