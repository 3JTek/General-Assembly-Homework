import React from 'react'
import ReactDOM from 'react-dom'


import './style.scss'
import Buttons from './components/Buttons'


class App extends React.Component {
  constructor() {
    super()


    this.state = {
      winConditions: {
        Rock: 'scissors',
        Paper: 'rock',
        Scissors: 'paper'
      }
    }

    this.choices = Object.keys(this.winConditions)




    this.makeChoice = this.makeChoice.bind(this)
    this.clickButton = this.clickButton.bind(this)
    this.findWinner = this.findWinner.bind(this)
  }

  findWinner(player1Choice, player2Choice) {
    if(player1Choice === player2Choice) return 'Tie'
    if(this.winConditions[player1Choice] === player2Choice) return 'You win'
    return 'You lose'
  }

  makeChoice() {
    const randomChoice = this.choices[Math.floor(Math.random() * this.choices.length)]
    console.log(randomChoice)
  }

  clickButton(){
    console.log('working')
  }

  play(e) {

    const player1Choice = e.target.textContent
    const player2Choice = this.makeChoice()

    this.result.textContent = this.findWinner(player1Choice, player2Choice)
  }


  render(){
    return (
      <div>
        <Buttons clickButton={this.clickButton} makeChoice={this.makeChoice} findWinner={this.findWinner}/>
      </div>
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
