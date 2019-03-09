document.addEventListener('DOMContentLoaded', () => {

  const grid = document.querySelectorAll('div.cell')
  const timer = document.querySelector('#time')
  const scoreDisplay = document.querySelector('#score')
  const startScreen = document.querySelector('div.start')
  const startBtn = document.querySelector('#startBtn')
  const finalScore = document.createElement('div')
  let mole

  let score = 0
  const clickMole = function() {
    score += 1
    scoreDisplay.innerText = score
    mole.classList.add('mole-image')
    // prevents mashing mole and getting more than one point by removing event listener after point
    mole.removeEventListener('click', clickMole)
  }

  const hideButton = function() {
    score = 0
    scoreDisplay.innerText = score
    startScreen.style.display = 'none'
  }

  const finalScoreFunc = function() {
    finalScore.innerText = `You scored ${score}!`
    finalScore.classList.add('finalScore')
    startScreen.append(finalScore)
  }

  // generates mole to randomly appear and disappear around the grid
  function startGame(){
    hideButton()
    const timerId = setInterval(() => {
      const randomNum = Math.floor(Math.random() * 9)
      // puts mole class onto random div
      grid[randomNum].classList.toggle('mole')
      mole = document.querySelector('.mole')
      mole.addEventListener('click', clickMole)
      setTimeout(() => {
        mole.removeEventListener('click', clickMole)
        grid[randomNum].classList.toggle('mole')
      }, 800)
    }, 1000)

    // countdown
    let timeRemaining = 10
    const countdown = setInterval(() => {
      timer.innerText = timeRemaining
      timeRemaining--
      if (timeRemaining < 0) {
        // stops timer and moles appearing at the same moment
        clearInterval(countdown)
        clearInterval(timerId)
        finalScoreFunc()
        startBtn.innerText = 'Play again'
        startScreen.style.display = 'flex'
      }
    }, 1000)
  }

  startBtn.addEventListener('click', startGame)
})