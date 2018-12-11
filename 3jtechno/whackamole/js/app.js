document.addEventListener('DOMContentLoaded', () => {

  const welcomeDiv = document.querySelector('.welcome-page')
  const difficultySelect = document.querySelector('select')
  const startBtn = document.querySelector('.start-button')

  const gameDiv = document.querySelector('.game-page')
  const buttonsContainer = document.querySelector('.container')
  const scoreDisplay = document.querySelector('.score')
  const timerDisplay = document.querySelector('.timer')

  const gameOverDiv = document.querySelector('.game-over-page')
  const playAgainBtn = document.querySelector('.play-again-button')

  const imageUrl = 'url("https://i.pinimg.com/736x/de/5f/7b/de5f7b027fd2e73634898b40b6b8cc13--flower-beard-time-magazine.jpg")'
  let score, timeRemaining, imagePosition, speed, gridSize, timerId
  const difficultyLevels = {
    speed: [2000, 1500, 800],
    gridSize: [12, 12, 24]
  }

  function whackAFill(e) {
    e.target.style.backgroundImage = ''
    e.target.setAttribute('disabled', 'true')
    scoreDisplay.textContent = `Your score is ${score ++}`
  }
  function countDown() {
    timerDisplay.textContent = `Time Left: ${timeRemaining}`
    timeRemaining--
    if (timeRemaining >= 0) {
      setTimeout(countDown, 1000)
    } else {
      clearInterval(timerId)
      gameDiv.classList.toggle('hidden')
      gameOverDiv.classList.toggle('hidden')
    }
  }
  function startGame(buttons) {
    timerId = setInterval(() => {
      console.log(imagePosition);
      if(imagePosition || imagePosition === 0){
        buttons[imagePosition].style.backgroundImage = ''
        buttons[imagePosition].setAttribute('disabled', 'true')
      }
      imagePosition = Math.floor(Math.random() * gridSize)+1
      buttons[imagePosition].style.backgroundImage = imageUrl
      buttons[imagePosition].removeAttribute('disabled')
    }, speed)
  }

  function init() {
    score = 0
    timeRemaining = 1500
    scoreDisplay.textContent = `Your score is ${score}`
    speed = difficultyLevels.speed[difficultySelect.value - 1]
    gridSize = difficultyLevels.gridSize[difficultySelect.value - 1]
    for(let i = 0; i < gridSize; i++){
      const newButton = document.createElement('button')
      newButton.className = `game-buttons-${gridSize}`
      newButton.setAttribute('disabled', 'true')
      buttonsContainer.appendChild(newButton)
    }
    const buttons = document.querySelectorAll('button')
    buttons.forEach(button => {
      button.addEventListener('click', whackAFill)
    })
    welcomeDiv.classList.toggle('hidden')
    gameDiv.classList.toggle('hidden')

    countDown(timeRemaining)
    startGame(buttons)
  }

  function restart() {
    gameOverDiv.classList.toggle('hidden')
    welcomeDiv.classList.toggle('hidden')
  }


  startBtn.addEventListener('click', init)
  playAgainBtn.addEventListener('click', restart)
})
