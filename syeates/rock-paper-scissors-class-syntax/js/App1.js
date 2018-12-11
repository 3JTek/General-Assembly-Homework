class RPS {
  constructor() {
    // GETTING (OR GENERATING) DOM ELEMENTS

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
    // SORTING OUT this
    this.makeChoice = this.makeChoice.bind(this)
    this.findWinner = this.findWinner.bind(this)
    this.play = this.play.bind(this)
    this.reset = this.reset.bind(this)




    // INITIALIZING THE EVENT LISTENERS
    this.buttons.forEach(button => button.addEventListener('click', this.play))
    this.resetBtn.addEventListener('click', this.reset)
  }

  // LOGIC
  makeChoice() {
    return this.choices[Math.floor(Math.random() * this.choices.length)]
  }

  findWinner() {
    if(this.player1Choice === this.player2Choice) return 'Tie'
    if(this.winConditions[this.player1Choice] === this.player2Choice) return 'You win'
    return 'You lose'
  }

  play(e) {

    this.player1Choice = e.target.textContent
    this.player2Choice = this.makeChoice()

    this.player1.textContent = this.player1Choice
    this.player2.textContent = this.player2Choice

    this.result.textContent = this.findWinner(this.player1Choice, this.player2Choice)
  }

  reset() {
    this.player1.textContent = ''
    this.player2.textContent = ''
    this.result.textContent = ''
  }

}

window.addEventListener('DOMContentLoaded', () => {
  new RPS()


})
