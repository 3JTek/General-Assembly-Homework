class RockPaperScissors {

  constructor(winConditions, id){
    //VARIABLES
    //Choices and what the choice beat as an object
    this.winConditions = winConditions

    this.id = id
    // {
    //   rock: 'scissors',
    //   paper: 'rock',
    //   scissors: 'paper'
    // }
    //An array of just the choices
    this.choices = Object.keys(this.winConditions)

    //Array to hold the choice buttons
    this.buttons = []

    // DOM ELEMENTS
    //Get the game board to append the buttons
    this.body = document.querySelector('body')

    // //document.querySelector('.game')
    // //this.buttons = document.querySelectorAll('button.choice')
    //
    // //Get the text box of the  player and the CPU
    // this.player1 = document.querySelector('.player1')
    // this.player2 = document.querySelector('.player2')
    //
    // //The result text
    // this.result = document.querySelector('.result')
    //
    //
    // //For each choice
    // this.choices.forEach((elem, i)=>{
    //   //Create a new button
    //   const newButton = document.createElement('button')
    //
    //   //Add the text of the choice to the button
    //   newButton.innerText =   this.choices[i]
    //
    //   //Add button to the game board
    //   this.gameBoard.append(newButton)
    //
    //   //Push this button to the buttons array
    //   this.buttons.push(newButton)
    // })
    //
    // //Create the reset button
    // this.resetBtn  = document.createElement('button')
    // //Add the reset button text
    // this.resetBtn.innerText = 'Reset'
    // //Add the reset button to the gameBoard
    // this.gameBoard.append(this.resetBtn)


    //BINDING
    this.reset = this.reset.bind(this)
    this.play = this.play.bind(this)

    //RENDER
    this.render()
  }

  //FUNCTIONS
  //COMPUTER choice
  makeChoice() {
    return this.choices[Math.floor(Math.random() * this.choices.length)]
  }

  //COMPARE choices and return winner
  findWinner(player1Choice, player2Choice) {
    if(player1Choice === player2Choice) return 'Tie'
    if(this.winConditions[player1Choice] === player2Choice) return 'You win'
    return 'You lose'
  }

  //PLAY FUNCITON
  play(e) {
    console.log(e.target)
    //Get choices
    const player1Choice = e.target.textContent
    const player2Choice = this.makeChoice()

    //Set text to player choice
    this.player1.textContent = player1Choice
    this.player2.textContent = player2Choice

    //Set result text to winner
    this.result.textContent = this.findWinner(player1Choice, player2Choice)
    this.result.style.backgroundColor = 'red'
    if (this.result.textContent === 'You win') this.result.style.backgroundColor = 'green'
    if(this.result.textContent === 'Tie') this.result.style.backgroundColor = 'blue'
  }

  //Reset text
  reset() {
    this.player1.textContent = ''
    this.player2.textContent = ''
    this.result.textContent = ''
    this.result.style.backgroundColor = 'grey'
  }

  render(){



    // this.body.innerHTML = `<div class="game">
    //   <p>Player 1 chose: <span class="player1"></span></p>
    //   <p>Player 2 chose: <span class="player2"></span></p>
    //   <p class="result"></p>
    // </div>`


    const gameBoard = document.createElement('div')

    this.body.append(gameBoard)
    gameBoard.classList.add('game')
    gameBoard.classList.add(this.id)

    this.player1P = document.createElement('p')
    this.player1P.innerHTML ='Player 1 chose: <span class="player1"></span>'
    gameBoard.append(this.player1P)

    this.player2P = document.createElement('p')
    this.player2P.innerHTML = 'Player 2 chose: <span class="player2"></span>'
    gameBoard.append(this.player2P)

    this.result = document.createElement('p')
    this.result.classList.add('result')
    gameBoard.append(this.result)





    //For each choice
    this.choices.forEach((elem, i)=>{
      //Create a new button
      const newButton = document.createElement('button')

      //Add the text of the choice to the button
      newButton.innerText =   this.choices[i]

      //Add button to the game board
      gameBoard.append(newButton)

      //Push this button to the buttons array
      this.buttons.push(newButton)
    })

    //Create the reset button
    this.resetBtn  = document.createElement('button')
    //Add the reset button text
    this.resetBtn.innerText = 'Reset'
    //Add the reset button to the gameBoard
    gameBoard.append(this.resetBtn)

    this.init()
  }

  ///INIT FUNCTION
  init() {
    //
    this.gameBoard = document.querySelector('.game.'+this.id)
    console.log(this.gameBoard)
    //this.buttons = document.querySelectorAll('button.choice')

    //Get the text box of the  player and the CPU
    this.player1 = document.querySelector('.game.'+this.id+' .player1')
    this.player2 = document.querySelector('.game.'+this.id+' .player2')

    //The result text
    this.result = document.querySelector('.game.'+this.id+' .result')



    //Reset text and bg color
    this.reset()
    // EVENT LISTENERS
    this.buttons.forEach(button => button.addEventListener('click', this.play))
    this.resetBtn.addEventListener('click', this.reset)
  }
}

rps = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper'
}

rpslz = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper'
}



//On load make new RockPaperScissors
window.addEventListener('DOMContentLoaded', () => {
  new RockPaperScissors(rps, 'rps')
  new RockPaperScissors(rpslz, 'rpslz')
})
