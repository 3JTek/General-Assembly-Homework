// VARIABLES

class RPS {

  constructor() {


    this.player1 = document.querySelector('.player1')
    this.player2 = document.querySelector('.player2')
    this.result = document.querySelector('.result')
    this.resetBtn = document.querySelector('button.reset')
    const gameClass = document.querySelector('.game')
    // this.input = document.createElement('textarea')

    this.buttons = {
      scissors: document.createElement('button'),
      paper: document.createElement('button'),
      rock: document.createElement('button')
    }

    for (const type in this.buttons) {
      this.buttons[type].innerText = type
      this.buttons[type].className = 'choice'
      gameClass.insertBefore(this.buttons[type], gameClass.childNodes[6])
    }

    this.winConditions = {
      rock: 'scissors',
      paper: 'rock',
      scissors: 'paper'
    }
    this.choices = Object.keys(this.winConditions)

    this.play = this.play.bind(this)
    this.makeChoice = this.makeChoice.bind(this)
    this.reset = this.reset.bind(this)

    this.init()

  }

  makeChoice() {
    return this.choices[Math.floor(Math.random() * this.choices.length)]
  }

  findWinner(player1Choice, player2Choice) {

    if (player1Choice === player2Choice) return 'Tie'
    if (this.winConditions[player1Choice] === player2Choice) return 'You win'
    return 'You lose'
  }

  play(e) {

    const player1Choice = e.target.textContent
    const player2Choice = this.makeChoice()

    this.player1.textContent = player1Choice
    this.player2.textContent = player2Choice

    this.result.textContent = this.findWinner(player1Choice, player2Choice)
  }

  init() {

    for (const type in this.buttons) {
      this.buttons[type].addEventListener('click', this.play)
    }
    this.resetBtn.addEventListener('click', this.reset)

  }

  reset() {

    this.player1.textContent = ''
    this.player2.textContent = ''
    this.result.textContent = ''

  }
}

window.addEventListener('DOMContentLoaded', () => new RPS())