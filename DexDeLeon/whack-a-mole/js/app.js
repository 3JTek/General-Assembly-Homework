class WhackAMole{
  constructor(){
    // VARIABLES
    this.grid
    this.timer = document.querySelector('#time')
    this.scoreDisplay = document.querySelector('#score')
    this.startScreen = document.querySelector('div.start')
    this.startBtn = document.querySelector('#startBtn')
    this.finalScore = document.createElement('div')
    this.audio = document.querySelector('audio')
    this.mole
    this.score = 0

    // BIND THIS FOR FUNCTIONS
    this.clickMole = this.clickMole.bind(this)
    this.hideButton = this.hideButton.bind(this)
    this.reset = this.reset.bind(this)
    this.displayMole = this.displayMole.bind(this)
    this.hideMole = this.hideMole.bind(this)
    this.startGame = this.startGame.bind(this)
    this.finalScoreFunc = this.finalScoreFunc.bind(this)

    // INITIALISE WITH EVENT LISTENER ON START BUTTON AND CREATE GAME GRID
    this.init()
  }

  init(){
    for(let i=0;i<9;i++){
      const cell = document.createElement('div')
      cell.classList.add('cell', 'animated')
      document.querySelector('.container').append(cell)
      console.log(i)
    }
    this.grid = document.querySelectorAll('div.cell')

    this.startBtn.addEventListener('click', this.startGame)
  }

  // puts mole class onto random div
  displayMole(randomNum){
    this.grid[randomNum].classList.toggle('mole')
    this.mole = document.querySelector('.mole')
    this.mole.addEventListener('click', this.clickMole)
  }

  hideMole(randomNum){
    this.mole.classList.remove('rubberBand')
    this.mole.removeEventListener('click', this.clickMole)
    this.grid[randomNum].classList.toggle('mole')
  }

  // when a mole is clicked
  clickMole() {
    // increase and update score display
    this.score += 1
    this.scoreDisplay.innerText = this.score
    // restart and play the squeak sound
    this.audio.currentTime = 0
    this.audio.play()
    // animate the mole being hit
    this.mole.classList.add('rubberBand')
    // prevents mashing mole and getting more than one point by removing event listener after first click
    this.mole.removeEventListener('click', this.clickMole)
  }

  hideButton() {
    this.score = 0
    this.scoreDisplay.innerText = this.score
    this.startScreen.style.display = 'none'
  }

  reset(countdown, timerId){
    clearInterval(countdown)
    clearInterval(timerId)
    this.finalScoreFunc()
    this.startBtn.innerText = 'Play again'
    this.startScreen.style.display = 'flex'

  }

  // generates mole to randomly appear and disappear around the grid
  startGame(){
    this.hideButton()
    const timerId = setInterval(() => {
      const randomNum = Math.floor(Math.random() * 9)
      this.displayMole(randomNum)
      setTimeout(() => this.hideMole(randomNum), 750)
    }, 1000)
    // countdown
    let timeRemaining = 60
    const countdown = setInterval(() => {
      this.timer.innerText = timeRemaining
      timeRemaining--
      if (timeRemaining === 0) {
        // stops timer and moles appearing at the same moment
        setTimeout(() => this.reset(countdown, timerId), 1000)
      }
    }, 1000)
  }

  finalScoreFunc() {
    this.finalScore.innerText = `You scored ${this.score}!`
    this.finalScore.classList.add('finalScore')
    this.startScreen.append(this.finalScore)
  }



}

document.addEventListener('DOMContentLoaded', () => {

  new WhackAMole()

})
