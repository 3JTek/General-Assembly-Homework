$(()=>init())
//declare Variables
let $sampleTextBox
let $inputTextBox
let $wordCountBox
let $playButton
let $wpmBox
let $countDown
let startTime
let index
let wordCount
let currentSample
let timerRemaining
let timerId
const gameLength = 60

function init(){

  //Get DOM elementss
  $sampleTextBox = $('.sample-text-box')
  $inputTextBox = $('.input-text-box')
  $wordCountBox = $('#wordcount')
  $playButton = $('.play-button')
  $wpmBox = $('#wpmdisplay')
  $countDown = $('#countdown')

  //Add event listeners
  $playButton.on('click', playGame)
  $inputTextBox.on('keydown', gameLogic)

  // //First game set text to play
  // $playButton.text('Play')

  //Reset Variables
  resetVariables()

  //Start Game
  // playGame()
}

function checkForWin() {
  if(currentSample.length === index){
    //Game Won!!!
    $inputTextBox.addClass('win')
    //Win set text to PLay Again
    $playButton.text('Play Again')
    clearInterval(timerId)
  }
}


function gameLogic(e) {
  if(startTime === undefined){
    startTime = new Date()
    //During game set text to Reset
    $playButton.text('Reset')
  }

  if(e.key === currentSample.charAt(index)) {
    index++
    checkForWin()
    incWordCount(e)
  } else {
    e.preventDefault()
  }
}

function timer(){
  timerId = setTimeout(timer, 1000)
  if(timerRemaining === 0) {
    clearInterval(timerId)
    $inputTextBox.addClass('lose')

    //Lose set text to P{lay again}
    $playButton.text('Play Again')
  }
  $countDown.text(timerRemaining)
  timerRemaining--
}

function resetVariables(){
  //RESET
  index = 0
  wordCount = 0
  $wordCountBox.text(wordCount)
  $wpmBox.text('0')
  timerRemaining = gameLength
  $countDown.text(timerRemaining)
}

function playGame(){
  resetVariables()

  //
  startTime = undefined
  currentSample = samples[Math.floor(Math.random()*samples.length)]
  $sampleTextBox.text(currentSample)
  $inputTextBox.val('')
  $inputTextBox.removeClass('win')
  $inputTextBox.removeClass('lose')
  clearInterval(timerId)
  timer()
}

function incWordCount(e){
  if(e.key === ' '){
    $wordCountBox.text(++wordCount)
    const now = new Date()
    const diff = now - startTime
    const diffMins = diff/(1000*60)
    $wpmBox.text(Math.round(wordCount /diffMins))
  }
}
