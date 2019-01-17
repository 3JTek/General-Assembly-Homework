document.addEventListener('DOMContentLoaded', () => {
  // selecting elements
  const option = document.querySelectorAll('.moleholder')
  const scoreDisplay = document.querySelector('.score')
  const countDisplay = document.querySelector('#countDisplay')
  const startBtn = document.querySelector('#start-button')
  const startDisplay = document.querySelector('.start-game')
  const resultDisplay = document.querySelector('#result-display')
  let rand =0, userScore=0, count =59
  // choosing a random mole
  function getRandom(){
    return Math.floor( Math.random() * option.length)
  }
  // activating the mole
  function activeMole(){
    rand = getRandom()
    option[rand].classList.add('active')
    setTimeout(() => {
      option[rand].classList.remove('active')
    },750)
  }
  // counting down from 60
  function countdown(){
    countDisplay.textContent = count
    count--
  }
  // increasing score if you hit mole, decreasing if you miss,choose clicks carefully. then updating text
  function userClicked(e){
    if(parseInt(e.target.id) === rand){
      userScore++
      e.target.removeEventListener('click', userClicked)
    } else{
      // choose your clicks carefully
      userScore --
    }
    scoreDisplay.innerText= userScore
  }
  // reset the count and score for new game
  function resetScoreAndTimer(){
    count = 59
    countDisplay.textContent = 60
    userScore = 0
    scoreDisplay.textContent = 0
  }
  // running the game
  function init(){
    resetScoreAndTimer()
    const timerId = setInterval(() => {
      option.forEach(option => {
        option.addEventListener('click', userClicked)
      })
      activeMole()
      countdown()
    }, 1000)
    // ending the game
    setTimeout(() => {
      clearInterval(timerId)
      startDisplay.style.display='flex'
      resultDisplay.innerText = `You scored ${userScore}. Play Again?`
    },60000)
  }
  // beginning the game
  startBtn.addEventListener('click', () => {
    init()
    startDisplay.style.display='none'
  })
})
