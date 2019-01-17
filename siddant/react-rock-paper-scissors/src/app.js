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
      display: {
        player: '',
        computer: '',
        winner: '',
        playerWon: 0,
        computerWon: 0
      },

      choices: ['rock', 'paper', 'scissors'] //Object.keys(this.winConditions)
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
    this.setState({display: {
      computer: computer,
      player: player,
      winner: winner[1],
      playerWon: winner[0],
      computerWon: winner[2]
    } })
  }

  findWinner(computer, player) {
    let playerWin = this.state.display.playerWon
    let computerWin = this.state.display.computerWon
    if(player === computer) return [playerWin,`${player} Tie ${computer}`,computerWin]
    if(this.state.winConditions[player][0] === computer || this.state.winConditions[player][1] === computer){
      playerWin+=1
      return [playerWin,`${player} beat ${computer}`,computerWin]
    }
    computerWin+=1
    return [playerWin,`${computer} beat ${player}`,computerWin]
  }

  reset(){
    this.setState({display: {
      computer: '',
      player: '',
      winner: '',
      playerWon: 0,
      computerWon: 0
    } })
  }

  render(){
    return(
      <div className="game">
        <h1>Rock Paper Siccior</h1>
        <Button
          choices={this.state.choices}
          handelEvent={this.handelEvent}
          restEvent={this.reset}
        />
        <Display
          display={{...this.state.display}}
        />
      </div>
    )
  }
}


ReactDom.render(<App  />, document.querySelector('#root'))
