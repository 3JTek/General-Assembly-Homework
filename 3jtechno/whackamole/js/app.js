let score, timeRemaining, imagePosition, speed, gridSize, timerId
let difficultySelect, welcomeDiv, gameOverDiv, buttons, gridObj
const difficultyLevels = {
  speed: [2000, 1500, 800],
  gridSize: [12, 12, 24]
}
const imageUrl = 'url("https://i.pinimg.com/736x/de/5f/7b/de5f7b027fd2e73634898b40b6b8cc13--flower-beard-time-magazine.jpg")'

class WhackFill{
  constructor(){
    this.gameDiv = document.querySelector('.game-page')
    this.buttonsContainer = document.querySelector('.container')
    this.scoreDisplay = document.querySelector('.score')
    this.timerDisplay = document.querySelector('.timer')

    this.countDown = this.countDown.bind(this)
    this.targetReach = this.targetReach.bind(this)

    this.init()
  }

  countDown() {
    this.timerDisplay.textContent = `Time Left: ${timeRemaining}`
    timeRemaining--
    if (timeRemaining >= 0) {
      setTimeout(this.countDown, 1000)
    } else {
      clearInterval(timerId)
      this.gameDiv.classList.toggle('hidden')
      gameOverDiv.classList.toggle('hidden')
    }
  }
  targetReach(e) {
    buttons[imagePosition].classList.remove('showImage')
    this.scoreDisplay.textContent = `Your score is ${score ++}`
  }
  startGame(buttons) {
    timerId = setInterval(() => {
      if(imagePosition || imagePosition === 0){
        //Hide image
        buttons[imagePosition].classList.remove('showImage')
      }
      //Select and show new image
      imagePosition = Math.floor(Math.random() * gridSize)
      buttons[imagePosition].classList.add('showImage')
    }, speed)
  }
  createGrid(gridSize){
    //Create a 4x3 or 6x4 depending of the difficulty
    for(let i = 0; i < gridSize; i++){
      const newButton = document.createElement('button')
      newButton.className = `game-buttons-${gridSize}`
      this.buttonsContainer.appendChild(newButton)
    }
    buttons = document.querySelectorAll('.container button')
    buttons.forEach(button => {
      button.addEventListener('click', this.targetReach)
    })
  }
  init() {
    //Configuring the setting of the game
    score = 0
    timeRemaining = 100
    this.scoreDisplay.textContent = `Your score is ${score}`
    speed = difficultyLevels.speed[difficultySelect.value - 1]
    gridSize = difficultyLevels.gridSize[difficultySelect.value - 1]

    this.createGrid(gridSize)

    //Hide home page and show grid page
    welcomeDiv.classList.toggle('hidden')
    this.gameDiv.classList.toggle('hidden')

    this.countDown(timeRemaining)
    this.startGame(buttons)
  }
}

document.addEventListener('DOMContentLoaded', () => {

  welcomeDiv = document.querySelector('.welcome-page')
  difficultySelect = document.querySelector('select')
  const startBtn = document.querySelector('.start-button')

  gameOverDiv = document.querySelector('.game-over-page')
  const playAgainBtn = document.querySelector('.play-again-button')

  function restart() {
    //Delete the grid and display the home page and
    gameOverDiv.classList.toggle('hidden')
    welcomeDiv.classList.toggle('hidden')
    buttons.forEach(button =>{
      gridObj.buttonsContainer.removeChild(button)
    })
  }

  function newObject(){
    gridObj = new WhackFill()
  }

  startBtn.addEventListener('click', newObject)
  playAgainBtn.addEventListener('click', restart)

})
