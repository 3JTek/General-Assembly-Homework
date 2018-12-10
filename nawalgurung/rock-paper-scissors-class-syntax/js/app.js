// VARIABLES
class RPS {
  constructor(){
    this.buttons = document.querySelectorAll('button.choice')
    this.player1 = document.querySelector('.player1')
    this.player2 = document.querySelector('.player2')
    this.result = document.querySelector('.result')
    this.resetBtn = document.querySelector('button.reset')
    this.winConditions = {
      rock: 'scissors',
      paper: 'rock',
      scissors: 'paper'
    }
    this.choices = Object.keys(this.winConditions)
    this.reset = this.reset.bind(this)
    this.play = this.play.bind(this)
    // INITIALISE BTNS EVENT LISTENERS WHEN THE PAGE LOADS
    this.init()
  }



  //------------ FUNCTIONS - METHODS in the NEW ES6 ----------------//
  makeChoice() {
    return this.choices[Math.floor(Math.random() * this.choices.length)]
  }

  findWinner(player1Choice, player2Choice) {
    if(player1Choice === player2Choice) return 'Tie'
    if(this.winConditions[player1Choice] === player2Choice) return 'You win'
    return 'You lose'
  }

  play(e) {

    const player1Choice = e.target.textContent
    const player2Choice = this.makeChoice()

    this.player1.textContent = player1Choice
    this.player2.textContent = player2Choice

    this.result.textContent = this.findWinner(player1Choice, player2Choice)
  }

  reset() {
    this.player1.textContent = ''
    this.player2.textContent = ''
    this.result.textContent = ''
  }

  init(){
    // INITIALISE EVENT LISTENERS
    this.buttons.forEach(button => button.addEventListener('click', this.play))
    this.resetBtn.addEventListener('click', this.reset)
  }

}

document.addEventListener('DOMContentLoaded', () => {
  new RPS()
})
