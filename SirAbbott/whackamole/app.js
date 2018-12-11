document.addEventListener('DOMContentLoaded', () => {

  const scoreDisplay = document.querySelector('.score')
  const btn = document.querySelectorAll('.game-buttons')
  const timer = document.querySelector('.timer')
  const startBtn = document.querySelector('.start-button')
  const welcomeDiv = document.querySelector('.welcome')
  const gameDiv = document.querySelector('.game')
  const gameOverDiv = document.querySelector('.game-over')
  const playAgainBtn = document.querySelector('.play-again')
  let score = 0
  let timeRemaining = 10

  function hide(win = true) {
    btn.forEach(button => {
      button.style.backgroundImage = ''
      button.setAttribute('disabled', 'true')
    })
    if (win) {
      score++
      scoreDisplay.textContent = `Your score is ${score}`
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

  setInterval(() => {
    hide(false)
    const choices = Math.floor(Math.random() * 12)
    btn[choices].style.backgroundImage = 'url("https://i.pinimg.com/736x/de/5f/7b/de5f7b027fd2e73634898b40b6b8cc13--flower-beard-time-magazine.jpg")'
    btn[choices].removeAttribute('disabled')
  }, 1500)

  function init() {
    welcomeDiv.classList.toggle('hidden')
    gameDiv.classList.toggle('hidden')
    score = 0
    timeRemaining = 10
    countDown()
  }

  btn.forEach(button => {
    button.addEventListener('click', hide)
  })

  startBtn.addEventListener('click', init)
})