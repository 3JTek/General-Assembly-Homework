import React from 'react'
import ReactDOM from 'react-dom'


import './style.scss'
import Buttons from './components/Buttons'
import Alerts from './components/Alerts'


class App extends React.Component {
  constructor() {
    super()


    this.state = {
      winConditions: {
        Rock: 'Scissors',
        Paper: 'Rock',
        Scissors: 'Paper'
      }
    }

    this.choices = Object.keys(this.state.winConditions)
    this.player2Choice = this.makeChoice()
    this.player1Choice = ''
    this.winner = ''
    console.log(this.choices)


    this.makeChoice = this.makeChoice.bind(this)
    this.clickButton = this.clickButton.bind(this)
    this.clickButton2 = this.clickButton2.bind(this)
    this.clickButton3 = this.clickButton3.bind(this)
    this.findWinner = this.findWinner.bind(this)
  }

  findWinner() {
    if(this.player1Choice === this.player2Choice){
      this.winner = 'Tie'
    } else if (this.winConditions[this.player1Choice] === this.player2Choice) {
      this.winner = 'You win!'
    } else {
      this.winner = 'You lose'
    }
  }

  makeChoice() {
    return this.choices[Math.floor(Math.random() * this.choices.length)]
  }

  clickButton(){
    this.player1Choice = 'Rock'
    console.log('rock')
    console.log(this.findWinner())
  }

  clickButton2(){
    this.player1Choice = 'Paper'
    console.log('paper')
  }

  clickButton3(){
    this.player1Choice = 'Scissors'
    console.log('scissors')
  }


  render(){
    return (
      <div>
        <Buttons clickButton={this.clickButton} clickButton2={this.clickButton2} clickButton3={this.clickButton3}/>
        <Alerts winner={this.winner} player1Choice={this.player1Choice} player2Choice={this.player2Choice}/>
      </div>
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
