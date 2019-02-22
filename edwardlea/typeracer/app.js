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
  //Get DOM elements
  $sampleTextBox = $('.sample-text-box')
  $inputTextBox = $('.input-text-box')
  $wordCountBox = $('.word-count-box')
  $playButton = $('.play-button')
  $wpmBox = $('.wpm-box')
  $countDown = $('.count-down')

  //Add event listeners
  $playButton.on('click', playGame)
  $inputTextBox.on('keydown', gameLogic)

  //Reset Variables
  resetVariables()
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

function checkForWin() {
  if(currentSample.length === index){
    //Game Won!!!
    $inputTextBox.addClass('win')
    $sampleTextBox.addClass('win')
    //Win set text to PLay Again
    $playButton.text('Play Again')
    clearInterval(timerId)
  }
}

function wpmCheck(){
  // find time at last word completion
  const now = new Date()
  // calculate and display wpm
  const diff = (now - startTime)/(1000*60)
  $wpmBox.text(Math.round(wordCount /diff))
}


function incWordCount(e){
  // at stroke of space key
  if(e.key === ' '){
    // word count incremented and updated on screen
    $wordCountBox.text(++wordCount)
    // called wpmCheck to calculate current wpm
    wpmCheck()
  }
}

function gameLogic(e) {
  if(startTime === undefined){
    startTime = new Date()
    //During game set text to Reset
    $playButton.text('Reset')
  }
  // if current pressed key is equal to the character index increase index
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
    $sampleTextBox.addClass('lose')

    //Lose set text to P{lay again}
    $playButton.text('Play Again')
  }
  $countDown.text(timerRemaining)
  timerRemaining--
}

function playGame(){
  resetVariables()

  //reset game conditions
  startTime = undefined
  currentSample = samples[Math.floor(Math.random()*samples.length)]
  $sampleTextBox.text(currentSample)
  $inputTextBox.val('')
  $inputTextBox.removeClass('win')
  $inputTextBox.removeClass('lose')
  $sampleTextBox.removeClass('win')
  $sampleTextBox.removeClass('lose')
  clearInterval(timerId)
  $inputTextBox.focus()
  // start game timer
  timer()
}
