class RPS{
  constructor(){
    // Get DOM elements
    const game = document.querySelector('.game')
    this.player1 = document.querySelector('.player1')
    this.player2 = document.querySelector('.player2')
    this.result = document.querySelector('.result')
    this.resetBtn = document.querySelector('button.reset')

    // Create object containing selection button elements
    this.buttons = {
      rock: document.createElement('button'),
      paper: document.createElement('button'),
      scissors: document.createElement('button')
    }

    // Loop over this.buttons object (selection buttons only) to add inner text and asign class. Button is then appended to game div.
    for (const type in this.buttons) {
      this.buttons[type].innerText = type
      game.appendChild(this.buttons[type])
    }

    // Reset button element is created, inner text is added, and finally button is appended to game div element.
    this.resetBtn = document.createElement('button')
    this.resetBtn.innerText = 'Reset'
    game.appendChild(this.resetBtn)

    // Win conditions object created. this refers to occurance of constructor.
    this.winConditions = {
      rock: 'scissors',
      paper: 'rock',
      scissors: 'paper'
    }

    // Choices are defined in an array using the winConditions object.
    this.choices = Object.keys(this.winConditions)

    // this.play & this.reset is binded to constructor 'this' to ensure any interaction with the DOM refers to the constructor this and not DOM this.
    this.play = this.play.bind(this)
    this.reset = this.reset.bind(this)

    // init function is called as part of the constructor
    this.init()
  }
  // init function adds event listeners to DOM elements.
  init(){
    // this.buttons object is loops through to call this.play on click
    for(const type in this.buttons){
      this.buttons[type].addEventListener('click', this.play)
    }
    // event listener added to this.resetBtn, which called this.reset on click
    this.resetBtn.addEventListener('click', this.reset)
  }

  // makeChoice function returns random element from this.choices array
  makeChoice() {
    return this.choices[Math.floor(Math.random() * this.choices.length)]
  }

  // findWinner function defined using player1Choice and player2Choice from play function.
  findWinner(player1Choice, player2Choice) {
    if(player1Choice === player2Choice) return 'Tie'
    if(this.winConditions[player1Choice] === player2Choice) return 'You win'
    return 'You lose'
  }

  // play function defined which uses e (event) as a parameter.
  play(e) {
    // Player choices defined using event listener and this.makeChoice function.
    const player1Choice = e.target.textContent
    const player2Choice = this.makeChoice()
    // text content of DOM elements updated with player choices
    this.player1.textContent = player1Choice
    this.player2.textContent = player2Choice
    // findWinner function called, passing in player1Choice & player2Choice
    this.result.textContent = this.findWinner(player1Choice, player2Choice)
  }

  // reset function defined, which clears text content text content of DOM elements.
  reset() {
    this.player1.textContent = ''
    this.player2.textContent = ''
    this.result.textContent = ''
  }
}

// on DOM load, new RPS constructor is called.
document.addEventListener('DOMContentLoaded', () => {
  new RPS()
})
