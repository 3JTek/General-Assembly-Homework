// VARIABLES

class RPS{
  constructor(){
    this.winConditions = {
      rock: ['scissors','lizard'],
      paper: ['rock', 'spock'],
      scissors: ['paper','lizard'],
      lizard: ['paper','spock'],
      spock: ['rock', 'scissor']
    }
    this.choices = Object.keys(this.winConditions)

    const game = document.querySelector('.game')
    this.resetBtn = document.querySelector('button.reset')

    this.choices.forEach(element  => {
      const button = document.createElement('button')
      button.textContent = element
      button.setAttribute('class', 'choice')
      game.insertBefore(button,this.resetBtn)
    })

    this.buttons = document.querySelectorAll('button.choice')
    this.player1 = document.querySelector('.player1')
    this.player2 = document.querySelector('.player2')
    this.result = document.querySelector('.result')
    this.reset = this.reset.bind(this)
    this.play = this.play.bind(this)
    this.init()

  }
  //function
  makeChoice() {
    return this.choices[Math.floor(Math.random() * this.choices.length)]
  }

  init(){
    // EVENT LISTENERS
    this.buttons.forEach(button => button.addEventListener('click', this.play))
    this.resetBtn.addEventListener('click', this.reset)
  }

  reset() {
    this.player1.textContent = ''
    this.player2.textContent = ''
    this.result.textContent = ''
  }

  play(e) {
    const player1Choice = e.target.textContent
    const player2Choice = this.makeChoice()
    this.player1.textContent = player1Choice
    this.player2.textContent = player2Choice
    this.result.textContent = this.findWinner(player1Choice, player2Choice)
  }

  findWinner(player1Choice, player2Choice) {
    if(player1Choice === player2Choice) return 'Tie'
    if(this.winConditions[player1Choice][0] === player2Choice || this.winConditions[player1Choice][1] === player2Choice) return 'You win'
    return 'You lose'
  }
}


window.addEventListener('DOMContentLoaded', () => new RPS())
