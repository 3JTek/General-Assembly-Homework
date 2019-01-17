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
        Rock: 'scissors',
        Paper: 'rock',
        Scissors: 'paper'
      }
    }

    this.choices = Object.keys(this.state.winConditions)

    console.log(this.choices)


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
    return this.choices[Math.floor(Math.random() * this.choices.length)]
  }

  clickButton(){
    console.log('working')

  }



  render(){
    return (
      <div>
        <Buttons clickButton={this.clickButton} />
        <Alerts makeChoice={this.makeChoice} findWinner={this.findWinner} />
      </div>
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
