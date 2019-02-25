
let option
let scoredisplay
let countDisplay
let button
let inviteSection
let statusBar
let gameSection
let title
let subtitle

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

function init() {
  option = document.querySelectorAll('.moleholder')
  scoredisplay = document.querySelector('#score')
  countDisplay = document.querySelector('#countDisplay')
  button = document.querySelector('button')
  inviteSection = document.querySelector('.invite')
  statusBar = document.querySelector('.statusBar')
  gameSection = document.querySelector('.game')
  title = document.querySelector('h1')
  subtitle = document.querySelector('h2')
  
  button.addEventListener('click', () =>  {
    const game = startGame()
    stopGameAfter60s(game)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  init()
})
