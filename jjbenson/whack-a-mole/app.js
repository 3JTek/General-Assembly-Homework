document.addEventListener('DOMContentLoaded',() => init())
//
// class gameBoard{
//   constructor(){
//
//
//     this.render()
//   }
//   render(){
//
//     this.gameBoard = document.createElement(div)
//     this.gameBoard
//
//       this.init()
//   }
//   init(){
//
//
//   }
// }

let moleArray =[]
let randomMole
let score
let timer
let timerId
let timerArray = []
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
let maxMoles = 2

function init () {

  reset()

  // moleArray = document.querySelectorAll('div.mole')
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
  // clearInterval(showMoleTimer)
  // clearInterval(hideMoleTimer)
  clearInterval(timerId)
  scoreBox.innerHTML = score


  removeGameBoard()

  makeMoles(molesX,molesY)

  startButton.addEventListener('click',startClick)
  // })

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
  // reset()
  startGame()
}
function reset(){
  score = 0
  timer = 10
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
  // gameBoard.style.display = 'none'
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
  console.log("showMole")
  const randomNumber = Math.floor(Math.random()*(moleArray.length-1))
 const randomTime = Math.floor(Math.random()*moleShowTime)+moleShowTime/2
  // console.log(randomNumber,moleArray)
  const mole = moleArray[randomNumber]
  // console.log(mole)

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
      // clearInterval(showMoleTimer)
      // clearInterval(hideMoleTimer)
      clearInterval(timerId)
      hideGameBoard()
      showGameOver()
    }
  },1000)

}
