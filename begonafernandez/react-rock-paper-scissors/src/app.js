import React from 'react'
import ReactDOM from 'react-dom'

import './style.scss'

import GameButtons from './components/GameButtons'
import PlayerBoard from './components/PlayerBoard'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      humanMove: null,
      computerMove: null,
      moves: {
        paper: 'rock',
        rock: 'scissors',
        scissors: 'paper'
      }
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.setState({ humanMove: e.target.id})
    this.computerMove()
  }

  computerMove() {
    const num = Math.floor(Math.random() * Math.floor(3))
    this.setState({ computerMove: Object.keys(this.state.moves)[num] })
  }

  findWinner() {
    let winner
    if (this.state.computerMove && this.state.humanMove) {
      if (this.state.computerMove === this.state.humanMove) {
        winner ='Tie'
      } else if (this.state.moves[this.state.humanMove] === this.state.computerMove) {
        winner = 'You win'
      } else {
        winner = 'Computer win'
      }
    } else {
      winner = 'Go ahead. Try your luck'
    }

    return winner
  }


  render() {
    return(
      <main>
        <h1>Rock Paper Scissors</h1>
        <h3>{this.findWinner()}</h3>
        <PlayerBoard
          type={'Computer'}
          move={this.state.computerMove}/>
        <p>vs</p>
        <PlayerBoard
          type={'Player'}
          move={this.state.humanMove}/>
        <GameButtons handleClick={this.handleClick}/>
      </main>
    )
  }


}

ReactDOM.render(<App />, document.getElementById('root'))
