document.addEventListener('DOMContentLoaded',() => init())

let moleArray =[]
// let randomMole
let score
let timer
let timerId
const timerArray = []
let showMoleTimer
let hideMoleTimer
let scoreBox = ''
let timerScreen = ''
let startButton = ''
let playAgainButton = ''
let increaseMolesButton
let increaseSpeedButton
let resetButton
let splashScreen = ''
let gameBoard
let main = ''
let gameOver = ''
let gameOverScore = ''
let molesX = 2
let molesY = 2
let moleShowTime = 750
let moleHideTime = 1000
let maxMoles = 1

function init () {

  //variables


  //GET DOM ELEMENTS
  scoreBox = document.querySelector('#score')
  timerScreen = document.querySelector('#timer')

  startButton = document.querySelector('.start')
  playAgainButton = document.querySelector('.play-again')
  resetButton = document.querySelector('.reset')
  increaseMolesButton = document.querySelector('.increaseMoles')
  increaseSpeedButton = document.querySelector('.increaseSpeed')

  splashScreen = document.querySelector('.splash.container')
  gameOver = document.querySelector('.gameOver.container')
  gameOverScore = document.querySelector('#gameOverScore')

  main = document.querySelector('main')

  timerArray.forEach((elem)=>{
    clearInterval(elem)
  })


  //Reset variables
  reset()

  //RENDER
  removeGameBoard()

  makeMoles(molesX,molesY)


  //EVENT LISTENERS
  startButton.addEventListener('click',startClick)

  playAgainButton.addEventListener('click',playAgainClick)
  increaseMolesButton.addEventListener('click',increaseTheMoles)
  increaseSpeedButton.addEventListener('click',increaseTheSpeed)
  resetButton.addEventListener('click',resetClick)

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

function resetClick(){
  moleShowTime = 750
  moleHideTime = 1000
  molesX = 2
  molesY = 2
  maxMoles = 2
  init()
  startGame()
}

function moleClick(e){
  score +=1
  scoreBox.innerHTML = score
  e.currentTarget.classList.remove('show')
}

function playAgainClick(){

  init()
  startGame()
}
function startClick(){
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

function increaseTheMoles(){
  molesX++
  molesY++
  maxMoles = (maxMoles + maxMoles)
  init()
  startGame()

}
function increaseTheSpeed(){
  moleShowTime -= 100
  moleHideTime -= 100

  init()
  startGame()
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

  decrementTimer()
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



function decrementTimer() {
  timerId = setInterval(() => {
    timer--
    timerScreen.innerHTML = timer
    if (timer ===0){
      timerArray.forEach((elem)=>{
        clearInterval(elem)
      })
      clearInterval(timerId)
      hideGameBoard()
      showGameOver()
    }
  },1000)


}
