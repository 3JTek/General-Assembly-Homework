import React from 'react'
import ReactDom from 'react-dom'

import Button from './components/Button.js'

import './style.scss'

class App extends React.Component{
  constructor(){
    super()

    this.state = {
      winConditions: {
        rock: ['scissors','lizard'],
        paper: ['rock', 'spock'],
        scissors: ['paper','lizard'],
        lizard: ['paper','spock'],
        spock: ['rock', 'scissor']
      },
      player: '',
      computer: ''
    }
    this.handelEvent = this.handelEvent.bind(this)
    this.makeChoice = this.makeChoice.bind(this)
    this.findWinner = this.findWinner.bind(this)

  }

  makeChoice() {
    const choices = Object.keys(this.state.winConditions)
    return choices[Math.floor(Math.random() * choices.length)]
  }

  handelEvent(e){
    const eventValue = e.target.textContent
    this.setState({computer: this.makeChoice()})
    this.setState({player: eventValue})
    console.log(this.findWinner())
  }

  findWinner() {
    const player = this.state.player
    const computer = this.state.computer
    if(player === computer) return 'Tie'
    if(this.state.winConditions[player][0] === computer || this.state.winConditions[player][1] === computer) return 'You win'
    return 'You lose'
  }

  render(){
    return(
      <div>
        <h1>Rock Paper Siccior</h1>
        <Button
          handelEvent={this.handelEvent}
        />
      </div>
    )
  }
}


ReactDom.render(<App  />, document.querySelector('#root'))
