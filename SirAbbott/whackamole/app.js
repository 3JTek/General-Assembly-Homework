document.addEventListener('DOMContentLoaded', () => {

  const scoreDisplay = document.querySelector('.score')
  const btn = document.querySelectorAll('.game-buttons')
  const timer = document.querySelector('.timer')
  const startBtn = document.querySelector('.start-button')
  const welcomeDiv = document.querySelector('.welcome')
  const gameDiv = document.querySelector('.game')
  const gameOverDiv = document.querySelector('.game-over')
  const playAgainBtn = document.querySelector('.play-again')
  const difficulty = document.querySelector('select')
  let score = 0
  let timeRemaining
  let speed

  function init() {
    switch (difficulty.value) {
      case '1':
        speed = 1200
        break
      case '2':
        speed = 900
        break
      case '3':
        speed = 650
        break
    }
    welcomeDiv.classList.toggle('hidden')
    gameDiv.classList.toggle('hidden')
    score = 0
    scoreDisplay.textContent = `Article ${score}`
    timeRemaining = 30
    countDown()
    startGame()
  }

  function hide(win = true) {
    btn.forEach(button => {
      button.style.backgroundImage = ''
      button.setAttribute('disabled', 'true')
    })
    if (win) {
      score++
      scoreDisplay.textContent = `Article ${score}`
    }
  }

  function countDown() {
    timer.textContent = `${timeRemaining} days until Brexit`
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
      hide(false)
      const choices = Math.floor(Math.random() * 12)
      btn[choices].style.backgroundImage = 'url("http://www.stickpng.com/assets/images/584be1992623fb7bc0d058ae.png")'
      btn[choices].removeAttribute('disabled')
    }, speed)
  }

  function restart() {
    welcomeDiv.classList.toggle('hidden')
    gameOverDiv.classList.toggle('hidden')
  }

  btn.forEach(button => {
    button.addEventListener('click', hide)
  })
  startBtn.addEventListener('click', init)
  playAgainBtn.addEventListener('click', restart)
})