class RockPaperScissors{
  constructor(){
    const div = document.querySelector('.game')
    this.button1 = document.createElement('button')
    this.button1.className = 'choice'
    this.button1.innerText = 'rock'
    div.insertBefore(this.button1, div.childNodes[6])

    this.button2 = document.createElement('button')
    this.button2.className = 'choice'
    this.button2.innerText = 'paper'
    div.insertBefore(this.button2, div.childNodes[7])

    this.button3 = document.createElement('button')
    this.button3.className = 'choice'
    this.button3.innerText = 'scissors'
    div.insertBefore(this.button3, div.childNodes[8])



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
