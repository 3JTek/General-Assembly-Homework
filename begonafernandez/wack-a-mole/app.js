document.addEventListener('DOMContentLoaded', () => {
  const option = document.querySelectorAll('.moleholder')
  const scoredisplay = document.querySelector('#score')
  const countDisplay = document.querySelector('#countDisplay')
  const button = document.querySelector('button')

  let rand = 0
  let userScore
  let count = 59

  function resetUserScore() {
    userScore = 0
    scoredisplay.innerText= `${userScore}`
  }

  function resetTimer() {
    count = 59
    countDisplay.textContent = 60
  }


  function getRandom(){
    return Math.floor( Math.random() * option.length)
  }

  function setActiveMole(){
    rand = getRandom()
    option[rand].classList.add('active')
    setTimeout(() => {
      option[rand].classList.remove('active')
    },850)
  }

  function setScore(e){
    if(parseInt(e.target.id) === rand){
      userScore++
      e.target.removeEventListener('click', setScore)
    }
    scoredisplay.innerText= `${userScore}`
  }

  function userClick() {
    option.forEach(option => {
      option.addEventListener('click', setScore)
    })
  }

  function countdown(){
    countDisplay.textContent = count
    count--
  }

  function gameTick() {
    setActiveMole()
    userClick()
    countdown()
  }

  function startGame() {
    return setInterval(gameTick, 1000)
  }

  function stopGameAfter60s(game) {
    setTimeout(() => {
      clearInterval(game)
    }, 6000)
  }

  button.addEventListener('click', () =>  {
    resetUserScore()
    resetTimer()
    const game = startGame()
    stopGameAfter60s(game)
  })
})
