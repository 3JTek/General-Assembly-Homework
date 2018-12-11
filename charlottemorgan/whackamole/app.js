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

  function hide(win = true) {
    btn.forEach(button => {
      button.style.backgroundImage = ''
      button.setAttribute('disabled', 'true')
    })
    if (win) {
      score++
      scoreDisplay.textContent = `SCORE ${score}`
    }
  }

  function countDown() {
    timer.textContent = timeRemaining
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
      btn[choices].style.backgroundImage = 'url("https://media1.fdncms.com/inlander/imager/u/original/2475698/tapped-out-hacks.png")'
      btn[choices].removeAttribute('disabled')
    }, speed)
  }


  function init() {
    switch (difficulty.value) {
      case '1':
        speed = 2000
        break
      case '2':
        speed = 1000
        break
      case '3':
        speed = 500
        break
    }
    console.log('speed', speed)
    welcomeDiv.classList.toggle('hidden')
    gameDiv.classList.toggle('hidden')
    score = 0
    scoreDisplay.textContent = `SCORE ${score}`
    timeRemaining = 10
    countDown()
    startGame()
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
