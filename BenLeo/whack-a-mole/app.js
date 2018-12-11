document.addEventListener('DOMContentLoaded', () => {
  //RANDOM NUMBER GENERATOR
  let rng
  let playerScore = 0
  let timer = 10

  //SELECTIONS
  const passiveDivs = document.querySelectorAll('.passive')
  const score = document.querySelector('#playerScore')
  const timerDisplay = document.querySelector('#timer')
  const buttons = document.querySelectorAll('button')
  const gameboard = document.querySelector('.gameboard')
  const startGameSplash = document.querySelector('.startGame')
  const endGameSplash = document.querySelector('.endGame')


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
    gameboard.style.display = 'none'
    endGameSplash.style.display = 'block'
  }

  const timerStart = function(){
    timerDisplay.textContent = timer
    timer --
    if(timer >= 0) {
      setTimeout(() => {
        timerStart()
      }, 1000)
    }
    if(timer===0) {
      endGame()
      console.log('End of Game')
    }
  }

  const init = function() {
    addMole()
    timerStart()
    gameboard.style.display = 'flex'
    startGameSplash.style.display = 'none'
    endGameSplash.style.display = 'none'
  }

  //PROBABLY WRAP THIS IN ANOTHER FUNCTION

  setInterval(() => {
    removeMole()
    addMole()
  }, 1000)

  //LISTENERS
  passiveDivs.forEach((div) => div.addEventListener('click', iterateScore))
  buttons.forEach(button => button.addEventListener('click', init))


})
