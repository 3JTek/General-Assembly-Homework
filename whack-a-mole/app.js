
document.addEventListener('DOMContentLoaded', () => {

  const grid = document.querySelectorAll('div.cell')
  const timer = document.querySelector('#time')
  const scoreDisplay = document.querySelector('#score')
  let mole

  let score = 0
  const clickMole = function() {
    score += 1
    scoreDisplay.innerText = score
    // prevents mashing mole and getting more than one point by removing event listener after point
    mole.removeEventListener('click', clickMole)
  }

// pushes score to scoreDisplay area
  scoreDisplay.innerText = score

  // generates mole to randomly appear and disappear around the grid
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
    }
  }, 1000)





})
