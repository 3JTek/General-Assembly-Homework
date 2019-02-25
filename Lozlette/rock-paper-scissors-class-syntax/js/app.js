
//constructor where variables are set and DOM accesses the elements
class RPS {
  constructor() {
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
    //variable containing object keys of win conditions object
    this.choices = Object.keys(this.winConditions)
    // variables binding this to play and reset
    this.play = this.play.bind(this)
    this.reset = this.reset.bind(this)
    //init function called
    this.init()
  }
  //init function with event listeners in. first event listener for play when button is clicked, second for reset when reset button is clicked.
  init() {
    // EVENT LISTENERS
    this.buttons.forEach(button => button.addEventListener('click', this.play))
    this.resetBtn.addEventListener('click', this.reset)
  }
  // FUNCTIONS
  //function makeChoice: returns choices length multiplied by random number, rounded down.
  makeChoice() {
    return this.choices[Math.floor(Math.random() * this.choices.length)]
  }
  //function findWinner with 2 arguments: player1 choice and player2 choice. If they equal each other, return tie, if win conditions equals player 2 choice return win, otherwise return you lose.
  findWinner(player1Choice, player2Choice) {
    if(player1Choice === player2Choice) return 'Tie'
    if(this.winConditions[player1Choice] === player2Choice) return 'You win'
    return 'You lose'
  }
  //play event function hold variable that puts player 1's choice in the e target as text. player 2 variable calls makeChoice function.
  //choices are made text content in boxes for player 1, player2 and winner box.
  play(e) {

    const player1Choice = e.target.textContent
    const player2Choice = this.makeChoice()

    this.player1.textContent = player1Choice
    this.player2.textContent = player2Choice

    this.result.textContent = this.findWinner(player1Choice, player2Choice)
  }
  // function reset: clears the text content to empty string
  reset() {
    this.player1.textContent = ''
    this.player2.textContent = ''
    this.result.textContent = ''
  }

}
//event listener for when the DOM content is loaded creates a new RPS
window.addEventListener('DOMContentLoaded', () => new RPS())
