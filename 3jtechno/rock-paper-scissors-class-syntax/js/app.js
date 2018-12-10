class RockPaperScissors{
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

    this.play = this.play.bind(this)
    this.reset = this.reset.bind(this)
    this.init()
  }

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

  init() {
    // DOM ELEMENTS
    this.buttons = document.querySelectorAll('button.choice')
    this.player1 = document.querySelector('.player1')
    this.player2 = document.querySelector('.player2')
    this.result = document.querySelector('.result')
    this.resetBtn = document.querySelector('button.reset')

    // EVENT LISTENERS
    this.buttons.forEach(button => button.addEventListener('click', this.play))
    this.resetBtn.addEventListener('click', this.reset)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new RockPaperScissors()
})

// // VARIABLES
// let buttons
// let player1
// let player2
// let result
// let resetBtn
//
// const winConditions = {
//   rock: 'scissors',
//   paper: 'rock',
//   scissors: 'paper'
// }
// // const choices = Object.keys(winConditions)
//
// // FUNCTIONS
// function makeChoice() {
//   return choices[Math.floor(Math.random() * choices.length)]
// }
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
//   buttons = document.querySelectorAll('button.choice')
//   player1 = document.querySelector('.player1')
//   player2 = document.querySelector('.player2')
//   result = document.querySelector('.result')
//   resetBtn = document.querySelector('button.reset')
//
//   // EVENT LISTENERS
//   buttons.forEach(button => button.addEventListener('click', play))
//   resetBtn.addEventListener('click', reset)
// }
//
// window.addEventListener('DOMContentLoaded', init)
