document.addEventListener('DOMContentLoaded', () => {

  const scoreDisplay = document.querySelector('.score')
  const btn = document.querySelectorAll('button')
  const timer = document.querySelector('.timer')
  let score = 0
  let timeRemaining = 10

  function display() {
    hide()
    const choices = Math.floor(Math.random() * 12)
    btn[choices].style.backgroundImage = 'url("https://i.pinimg.com/736x/de/5f/7b/de5f7b027fd2e73634898b40b6b8cc13--flower-beard-time-magazine.jpg")'
    btn[choices].removeAttribute('disabled')

  }

  function hide() {
    btn.forEach(button => {
      button.style.backgroundImage = ''
      button.setAttribute('disabled', 'true')
    })
  }

  setInterval(() => {
    display()
  }, 1500)

  btn.forEach(button => {
    button.addEventListener('click', winOrLose)
    button.addEventListener('click', hide)
  })

  function winOrLose() {
    score++
    scoreDisplay.textContent = `Your score is ${score}`
  }

  function countDown() {
    timer.textContent = timeRemaining
    timeRemaining--
    if (timeRemaining >= 0) {
      setTimeout(countDown, 1000)
    }
  }
  countDown()
})