document.addEventListener('DOMContentLoaded', () => {

  const welcomeDiv = document.querySelector('.welcome-page')
  const difficultySelect = document.querySelector('select')
  const startBtn = document.querySelector('.start-button')

  const gameDiv = document.querySelector('.game-page')
  const gameHardDiv = document.querySelector('.hard-game')
  const scoreDisplay = document.querySelector('.score')
  const timerDisplay = document.querySelector('.timer')
  const buttons = document.querySelectorAll('.game-buttons')

  const gameOverDiv = document.querySelector('.game-over')
  const playAgainBtn = document.querySelector('.play-again-button')

  const imageUrl = 'url("https://i.pinimg.com/736x/de/5f/7b/de5f7b027fd2e73634898b40b6b8cc13--flower-beard-time-magazine.jpg")'
  let score, timeRemaining, imagePosition, speed

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
      gameDiv.classList.toggle('hidden')
      gameOverDiv.classList.toggle('hidden')

    }
  }

  function startGame() {
    setInterval(() => {
      if(imagePosition){
        buttons[imagePosition].style.backgroundImage = ''
        buttons[imagePosition].setAttribute('disabled', 'true')
      }
      imagePosition = Math.floor(Math.random() * 12)

      buttons[imagePosition].style.backgroundImage = imageUrl
      buttons[imagePosition].removeAttribute('disabled')

    }, speed)
  }


  function init() {
    score = 0
    timeRemaining = 100
    scoreDisplay.textContent = `Your score is ${score}`

    switch (difficultySelect.value) {
      case '1':
      speed = 2000
      break
      case '2':
      speed = 1000
      break
      case '3':
      speed = 800
      buttons.forEach(button => {
        button.classList.toggle('game-buttons-24')
      })
      gameHardDiv.classList.toggle('hidden')
      break
    }

    welcomeDiv.classList.toggle('hidden')
    gameDiv.classList.toggle('hidden')

    countDown(timeRemaining)
    startGame()
  }

  function restart() {
    welcomeDiv.classList.toggle('hidden')
    gameOverDiv.classList.toggle('hidden')
  }

  buttons.forEach(button => {
    button.addEventListener('click', whackAFill)
  })

  startBtn.addEventListener('click', init)
  playAgainBtn.addEventListener('click', restart)
})
