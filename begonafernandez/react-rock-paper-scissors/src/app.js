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
      result: 'Go ahead. Try your luck'
    }

    this.windConditions = {
      paper: 'rock',
      rock: 'scissors',
      scissors: 'paper'
    }
    
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    const computerMove = this.computerMove()
    const result = this.findWinner()
    this.setState({ humanMove: e.target.id, computerMove, result})
  }

  computerMove() {
    return Object.keys(this.windConditions)[Math.floor(Math.random() * Math.floor(3))]
  }

  findWinner() {
    if (this.state.computerMove && this.state.humanMove) {
      if (this.state.computerMove === this.state.humanMove) {
        return 'Tie'
      } else if (this.windConditions[this.state.humanMove] === this.state.computerMove) {
        return 'You win'
      } else {
        return 'Computer win'
      }
    }
  }


  render() {
    return(
      <main>
        <h1>Rock Paper Scissors</h1>
        <h3>{this.state.result}</h3>
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
