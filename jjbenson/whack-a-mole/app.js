document.addEventListener('DOMContentLoaded',() => init())
//CREATE VARIABLES
let moleArray =[]
let startButtons = []
let score
let timer
let timerId
const timerArray = []
let showMoleTimer
let hideMoleTimer
let scoreBox = ''
let timerScreen = ''
let playAgainButton = ''
let mainMenuButton = ''
let audio
let splashScreen = ''
let gameBoard
let main = ''
let gameOver = ''
let gameOverScore = ''
let molesX = 2
let molesY = 2
const moleShowTime = 1000
const moleHideTime = 1500
let maxMoles = 1

function init () {

  //GET DOM ELEMENTS
  scoreBox = document.querySelector('#score')
  timerScreen = document.querySelector('#timer')

  startButtons = document.querySelectorAll('.start')
  playAgainButton = document.querySelector('.play-again')
  mainMenuButton = document.querySelector('.main-menu')

  splashScreen = document.querySelector('.splash.container')
  gameOver = document.querySelector('.gameOver.container')
  gameOverScore = document.querySelector('#gameOverScore')

  main = document.querySelector('main')

  audio = document.querySelector('audio')


  //Clear timers
  //clearAllTimers()

  //Reset variables
  reset()

  //EVENT LISTENERS
  startButtons[0].addEventListener('click',()=>setGameSize(3,1))
  startButtons[1].addEventListener('click',()=>setGameSize(4,2))
  startButtons[2].addEventListener('click',()=>setGameSize(5,3))


  playAgainButton.addEventListener('click',prepareGame)
  mainMenuButton.addEventListener('click', mainMenu)

  showSplash()

}
function removeGameBoard(){
  if(gameBoard!== undefined) gameBoard.remove()
}
function makeMoles(x,y){
  gameBoard = document.createElement('div')
  gameBoard.classList.add('container')
  gameBoard.classList.add('gameBoard')
  main.append(gameBoard)
  for(let i=0;i<x*y;i++){
    const mole = document.createElement('div')
    mole.classList.add('mole')
    mole.id = 'mole'+i
    mole.style.width = ((100/x)-1)+'%'
    mole.style.height = ((100/y)-1)+'%'
    mole.addEventListener('click', moleClick)
    moleArray.push(mole)
    gameBoard.append(mole)
  }
}

function clearAllTimers(){
  timerArray.forEach((elem)=>{
    clearInterval(elem)
  })
  // clearInterval(timerId)
}

function mainMenu(){
  hideGameOver()
  showSplash()
}

function moleClick(e){
  score +=1
  scoreBox.innerHTML = score
  e.currentTarget.classList.remove('show')
  audio.pause()
  audio.currentTime = 0
  audio.play()
}

function setGameSize(size,maxMoleNum){
  molesX = molesY = size
  maxMoles = maxMoleNum
  prepareGame()
}

function prepareGame(){
  reset()
  removeGameBoard()
  makeMoles(molesX,molesY)
  startGame()
}

function reset(){
  score = 0
  scoreBox.innerHTML = score
  timer = 10
  timerScreen.innerHTML = timer
  score = 0
  moleArray = []
}

function showSplash(){
  splashScreen.style.display = 'flex'
}
function hideSplash(){
  splashScreen.style.display = 'none'
}

function showGameOver(){
  gameOver.style.display = 'flex'
  gameOverScore.innerText = score
  clearAllTimers()
}
function hideGameOver(){
  gameOver.style.display = 'none'
}

function hideGameBoard(){
  gameBoard.style.display = 'none'
}
function showGameBoard(){
  gameBoard.style.display = 'flex'
}

function startGame(){
  hideSplash()
  hideGameOver()
  showGameBoard()
  for(let i=0;i<maxMoles;i++){
    showMole()
  }
  // decrementTimer()
  stopWatchTimer()
}

function showMole(){
  const randomNumber = Math.floor(Math.random()*(moleArray.length-1))
  const randomTime = Math.floor(Math.random()*moleShowTime)+moleShowTime/2
  const mole = moleArray[randomNumber]

  mole.classList.add('show')

  showMoleTimer =  setTimeout(()=>removeMole(mole),randomTime)
  timerArray.push(showMoleTimer)
}

function removeMole(mole){
  const randomTime = Math.floor(Math.random()*moleHideTime)+moleHideTime/2

  mole.classList.remove('show')
  hideMoleTimer = setTimeout(showMole,randomTime)
  timerArray.push(hideMoleTimer)
}

function gameOverFunc(){
  timerArray.forEach((elem)=>{
    clearInterval(elem)
  })
  // clearInterval(timerId)
  hideGameBoard()
  showGameOver()
}
function stopWatchTimer(){

  timer--
  timerScreen.innerHTML = timer
  if(timer>0){
    setTimeout(()=>stopWatchTimer(),1000)
  }else{
    gameOverFunc()
  }
}
// function decrementTimer() {
//   timerId = setInterval(() => {
//     console.log('decrementTimer',timerId)
//     timer--
//     timerScreen.innerHTML = timer
//     if (timer <= 0)gameOverFunc()
//   },1000)
// }
