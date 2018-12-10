// VARIABLES

class Game{
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
    this.init()
  }
  init(){
    // EVENT LISTENERS
    //this.buttons.forEach(button => button.addEventListener('click', play))
    this.resetBtn.addEventListener('click', this.makeChoice)
  }

  //function
  makeChoice() {
    console.log( this.choices[Math.floor(Math.random() * this.choices.length)])
  }


}



//
// // FUNCTIONS

//
// function findWinner(player1Choice, player2Choice) {
//   if(player1Choice === player2Choice) return 'Tie'
//   if(winConditions[player1Choice] === player2Choice) return 'You win'
//   return 'You lose'
// }
//
// function play(e) {
//
//   const player1Choice = e.target.textContent
//   const player2Choice = makeChoice()
//
//   player1.textContent = player1Choice
//   player2.textContent = player2Choice
//
//   result.textContent = findWinner(player1Choice, player2Choice)
// }
//
// function reset() {
//   player1.textContent = ''
//   player2.textContent = ''
//   result.textContent = ''
// }
//
// function init() {
//   // DOM ELEMENTS
//
// }

window.addEventListener('DOMContentLoaded', () => new Game())
