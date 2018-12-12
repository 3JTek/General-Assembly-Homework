document.addEventListener('DOMContentLoaded', () => {
  //RANDOM NUMBER GENERATOR
  let rng = 0,
    playerScore = 0,
    timer = 10,
    timerId,
    moleTimer

  //SELECTIONS
  const passiveDivs = document.querySelectorAll('.passive')
  const score = document.querySelector('#playerScore')
  const timerDisplay = document.querySelector('#timer')
  const buttons = document.querySelectorAll('button')
  const gameboard = document.querySelector('.gameboard')
  const startGameSplash = document.querySelector('.startGame')
  const endGameSplash = document.querySelector('.endGame')
  const finalScore = document.querySelector('#finalScore')


  //FUNCTIONS
  const addMole = function () {
    rng = Math.floor(Math.random()*9)
    passiveDivs[rng].classList.add('activeMole')
  }

  const removeMole = function () {
    passiveDivs[rng].classList.remove('activeMole')
  }

  const iterateScore = function(e) {
    if(parseInt(e.target.id) === rng) {
      playerScore++
      score.innerText = playerScore
    }
  }

  const endGame = function() {
    clearInterval(timerId)
    finalScore.innerText = playerScore
    gameboard.style.display = 'none'
    endGameSplash.style.display = 'block'
    timer = 10
    playerScore = 0
  }

  function countdown(){
    timer--
    timerDisplay.textContent = timer
    if(timer === 0) {
      clearInterval(timerId)
      clearInterval(moleTimer)
      removeMole()
      endGame()
    }
  }

  const moleLogic = function () {
    addMole()
    moleTimer = setInterval(() => {
      removeMole()
      addMole()
    }, 1000)
  }

  const init = function() {
    moleLogic()
    timerId = setInterval(countdown, 1000)
    gameboard.style.display = 'flex'
    startGameSplash.style.display = 'none'
    endGameSplash.style.display = 'none'
  }
  //LISTENERS
  passiveDivs.forEach((div) => div.addEventListener('click', iterateScore))
  buttons.forEach(button => button.addEventListener('click', init))

})
