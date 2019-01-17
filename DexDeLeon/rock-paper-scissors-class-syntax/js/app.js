class RPS {
  constructor(options) {

    // ALL DOM ELEMENTS CONVERTED HERE
    // this.buttons = document.querySelectorAll('button.choice')
    this.resetButton = document.querySelector('button.reset')
    this.gameBoard = document.querySelector('div.game')
    this.player1 = document.querySelector('.player1')
    console.log(document.querySelector('.player1'))
    console.log(this.player1)
    this.player2 = document.querySelector('.player2')
    this.result =  document.querySelector('.result')
    this.options = options
    this.choices = Object.keys(this.options)

    // CREATE BUTTONS FROM THE CHOICES ARRAY TO BE APPENDED TO THE GAME BOARD
    this.buttons = []
    this.choices.forEach(choice => {
      const button = document.createElement('button')
      button.innerText = choice
      button.setAttribute('class', 'choice')
      this.buttons.push(button)
      this.gameBoard.appendChild(button)
    })

    // CREATE RESET BUTTON AND APPEND TO GAME BOARD
    const resetBtn = document.createElement('button')
    resetBtn.innerText = 'Reset'
    resetBtn.setAttribute('class', 'reset')
    this.gameBoard.appendChild(resetBtn)
    this.resetButton = resetBtn


    // HAVE TO BIND this KEYWORD FOR THE FUNCTIONS TO WORK AS EXPECTED
    this.makeChoice = this.makeChoice.bind(this)
    this.play = this.play.bind(this)
    this.reset = this.reset.bind(this)

    // RUN init()
    this.init()
  }

  // ADDS THE EVENT LISTENERS
  init() {
    this.buttons.forEach(button => button.addEventListener('click', this.play))
    this.resetButton.addEventListener('click', this.reset)
  }

  // ALL THE FUNCTIONS DECLARED AS METHODS OF THE RPS CLASS BELOW
  makeChoice () {
    return this.choices[Math.floor(Math.random() * this.choices.length)]
  }

  play (e) {
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

  findWinner (player1Choice, player2Choice) {
    if(player1Choice === player2Choice) return 'Tie'
    if(this.options[player1Choice] === player2Choice) return 'You win'
    return 'You lose'
  }
}

// ONCE DOM CONTENT HAS LOADED...
document.addEventListener('DOMContentLoaded', () => {
  // ...A NEW RPS CLASS IS CREATED BY PASSING THE OPTIONS OBJECT
  new RPS({
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
  })
})



// ORIGINAL CODE

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
// const choices = Object.keys(winConditions)

// FUNCTIONS
// function makeChoice() {
//   return choices[Math.floor(Math.random() * choices.length)]
// }

// function findWinner(player1Choice, player2Choice) {
//   if(player1Choice === player2Choice) return 'Tie'
//   if(winConditions[player1Choice] === player2Choice) return 'You win'
//   return 'You lose'
// }

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
