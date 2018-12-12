document.addEventListener('DOMContentLoaded', () => {
  //VARIABLES
  let rng = 0
  let playerScore = 0
  let timer = 11
  let timerId
  let moleTimer

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
  function addMole () {
    rng = Math.floor(Math.random()*9)
    passiveDivs[rng].classList.add('activeMole')
  }

  function removeMole () {
    passiveDivs[rng].classList.remove('activeMole')
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

  function iterateScore (e) {
    if(parseInt(e.currentTarget.id) === rng) {
      playerScore++
      score.innerText = playerScore
    }
  }

  function moleMovement () {
    removeMole()
    addMole()
  }

  function init () {
    addMole()
    timerId = setInterval(countdown, 1000)
    moleTimer = setInterval(moleMovement, 1000)
    score.innerText = playerScore
    gameboard.style.display = 'flex'
    startGameSplash.style.display = 'none'
    endGameSplash.style.display = 'none'
  }

  function endGame () {
    clearInterval(timerId)
    finalScore.innerText = playerScore
    gameboard.style.display = 'none'
    endGameSplash.style.display = 'block'
    timer = 10
    playerScore = 0
  }

  //LISTENERS
  passiveDivs.forEach((div) => div.addEventListener('click', iterateScore))
  buttons.forEach(button => button.addEventListener('click', init))


})
