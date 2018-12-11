let grid,
  timer,
  scoreDisplay,
  startScreen,
  startBtn,
  mole,
  score = 0,
  finalScore,
  audio

// when a mole is clicked
function clickMole() {
  // increase and update score display
  score += 1
  scoreDisplay.innerText = score
  // restart and play the squeak sound
  audio.currentTime = 0
  audio.play()
  // animate the mole being hit
  mole.classList.add('rubberBand')
  // prevents mashing mole and getting more than one point by removing event listener after first click
  mole.removeEventListener('click', clickMole)
}

function hideButton() {
  score = 0
  scoreDisplay.innerText = score
  startScreen.style.display = 'none'
}

function reset(countdown, timerId){
  clearInterval(countdown)
  clearInterval(timerId)
  finalScoreFunc()
  startBtn.innerText = 'Play again'
  startScreen.style.display = 'flex'

}
// puts mole class onto random div
function displayMole(randomNum){
  grid[randomNum].classList.toggle('mole')
  mole = document.querySelector('.mole')
  mole.addEventListener('click', clickMole)
}

function hideMole(randomNum){
  mole.classList.remove('rubberBand')
  mole.removeEventListener('click', clickMole)
  grid[randomNum].classList.toggle('mole')
}

// generates mole to randomly appear and disappear around the grid
function startGame(){
  hideButton()
  const timerId = setInterval(() => {
    const randomNum = Math.floor(Math.random() * 9)
    displayMole(randomNum)
    setTimeout(() => hideMole(randomNum), 750)
  }, 1000)
  // countdown
  let timeRemaining = 60
  const countdown = setInterval(() => {
    timer.innerText = timeRemaining
    timeRemaining--
    if (timeRemaining === 0) {
      // stops timer and moles appearing at the same moment
      setTimeout(() => reset(countdown, timerId), 1000)
    }
  }, 1000)
}

function finalScoreFunc() {
  finalScore.innerText = `You scored ${score}!`
  finalScore.classList.add('finalScore')
  startScreen.append(finalScore)
}

document.addEventListener('DOMContentLoaded', () => {
  // assign all variables when DOM has loaded
  grid = document.querySelectorAll('div.cell')
  timer = document.querySelector('#time')
  scoreDisplay = document.querySelector('#score')
  startScreen = document.querySelector('div.start')
  startBtn = document.querySelector('#startBtn')
  finalScore = document.createElement('div')
  audio = document.querySelector('audio')

  // Event listener to start button that runs the game code
  startBtn.addEventListener('click', startGame)

})
