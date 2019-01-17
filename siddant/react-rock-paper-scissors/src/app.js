import React from 'react'
import ReactDom from 'react-dom'

import Button from './components/Button.js'
import Display from './components/Display.js'

import './style.scss'

class App extends React.Component{
  constructor(){
    super()

    this.state = {
      winConditions: {
        rock: ['scissors'],
        paper: ['rock'],
        scissors: ['paper']


      },
      player: '',
      computer: '',
      display: '',
      playerWon: 0,
      computerWon: 0,
      choices: ['rock', 'paper', 'scissors']
    }
    this.handelEvent = this.handelEvent.bind(this)
    this.reset = this.reset.bind(this)

  }

  makeChoice() {
    return this.state.choices[Math.floor(Math.random() * this.state.choices.length)]
  }

  handelEvent(e){
    const computer = this.makeChoice()
    const player = e.target.textContent
    const winner = this.findWinner(computer, player)  
    this.setState({computer: computer, player: player, display: winner, playerWon: 0, computerWon: 0})

  }

  findWinner(computer, player) {
    //const player = this.state.player
    //const computer = this.state.computer
    if(player === computer) return `${player} Tie ${computer}`
    if(this.state.winConditions[player][0] === computer || this.state.winConditions[player][1] === computer){
      return `${player} beat ${computer}`
    }
    return `${computer} beat ${player}`
  }

  reset(){
    this.setState({computer: '', player: '', display: '', playerWon: 0, computerWon: 0})
  }

  render(){
    return(
      <div className="game">
        <h1>Rock Paper Siccior</h1>
        <Button
          handelEvent={this.handelEvent}
          restEvent={this.reset}
        />
        <Display
          display={this.state.display}
          player={this.state.player}
          computer={this.state.computer}
          playerWon={this.state.playerWon}
          computerWon={this.state.computerWon}
        />
      </div>
    )
  }
}


ReactDom.render(<App  />, document.querySelector('#root'))
