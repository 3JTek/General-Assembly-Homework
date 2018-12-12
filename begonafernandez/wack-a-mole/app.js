document.addEventListener('DOMContentLoaded', () => {
  const option = document.querySelectorAll('.moleholder')
  const scoredisplay = document.querySelector('#score')
  const countDisplay = document.querySelector('#countDisplay')
  const button = document.querySelector('button')
  const inviteSection = document.querySelector('.invite')
  const statusBar = document.querySelector('.statusBar')
  const gameSection = document.querySelector('.game')
  const title = document.querySelector('h1')
  const subtitle = document.querySelector('h2')


  let rand
  let userScore
  let count

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
    }, 750)
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

  function showGameBoard() {
    inviteSection.classList.add('hidden')
    statusBar.classList.remove('hidden')
    gameSection.classList.remove('hidden')
  }


  function showScoreBoard() {
    statusBar.classList.add('hidden')
    gameSection.classList.add('hidden')
    inviteSection.classList.remove('hidden')
    title.innerText = `Your score is ${userScore}`
    subtitle.innerText = 'Do you want to replay'
  }

  function startGame() {
    showGameBoard()
    resetUserScore()
    resetTimer()
    return setInterval(gameTick, 1000)
  }

  function stopGameAfter60s(game) {
    setTimeout(() => {
      clearInterval(game)
      showScoreBoard()
    }, 60000)
  }

  button.addEventListener('click', () =>  {
    const game = startGame()
    stopGameAfter60s(game)
  })
})
