$(()=>init())
//declare Variables
let $main
let $sampleTextBox
let $resultsTextBox
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
let letterCorrect


const gameLength = 6

function init(){

  //Get DOM elementss
  $main = $('main')
  $sampleTextBox = $('.sample-text-box')
  $resultsTextBox = $('.results-text-box')
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

function checkForWin() {
  if(currentSample.length === index){
    //Game Won!!!
    $main.addClass('win')
    gameOver()
    // $resultsTextBox.show()
    // //Win set text to Play Again
    // $playButton.text('Play Again')
    // clearInterval(timerId)
  }
}


function gameLogic(e) {
  if(startTime === undefined){
    startTime = new Date()
    //During game set text to Reset
    $playButton.text('Reset')
  }

  const letter = e.key.toLowerCase()
  const targetLetter = currentSample[index].charAt(6)
  const targetLetterLower = targetLetter.toLowerCase()

  if(e.key === targetLetter && timerRemaining>0) {

    console.log('timerRemaining',timerRemaining)

    if(letterCorrect){

      $sampleTextBox.children().eq(index).addClass('good')

      if(letterAcuracy[letter]){

        letterAcuracy[letter]['good']++
        letterAcuracy[letter]['total']++
        //console.log(letter, (letterAcuracy[letter]['good']/ letterAcuracy[letter]['total'])*100+'%')
      }
    }else{
      $sampleTextBox.children().eq(index).addClass('bad')
    }

    letterCorrect = true

    index++
    checkForWin()
    incWordCount(e)
  } else {
    e.preventDefault()
    if(e.key !== 'Shift' && timerRemaining>0){
      //Every wrong attempt decreases accuracy
      letterCorrect = false
      letterAcuracy[targetLetterLower] && letterAcuracy[targetLetterLower]['total']++
    }

  }
}
function gameOver(){
  clearInterval(timerId)
  $inputTextBox.hide()
  $playButton.text('Play Again')
  $resultsTextBox.show()

  results = Object.keys(letterAcuracy)
    .map(elem=>{
      if (!isNaN(letterAcuracy[elem]['good']/letterAcuracy[elem]['total']))
        return `${elem}: ${(letterAcuracy[elem]['good']/letterAcuracy[elem]['total'])*100}%`
    })
    .filter(elem => !!elem)
    .map((elem)=>`<div>${elem}</div>`)

  console.log(results)
  $resultsTextBox.html(results)
}
function timer(){
  timerId = setTimeout(timer, 1000)
  if(timerRemaining === 0) {
    $main.addClass('lose')
    gameOver()
    //disable text field
  }
  $countDown.text(timerRemaining)
  timerRemaining--
}

function resetVariables(){
  //RESET
  index = 0
  wordCount = 0
  timerRemaining = gameLength
  letterCorrect = true
  startTime = undefined

  currentSample = samples[Math.floor(Math.random()*samples.length)]
  currentSample = currentSample.split('').map((letter)=> `<span>${letter}</span>`)

  $wordCountBox.text(wordCount)
  $wpmBox.text('0')
  $countDown.text(timerRemaining)

  $resultsTextBox.hide()

  $sampleTextBox.html(currentSample)

  $inputTextBox.val('')
  $inputTextBox.show()

  $main.removeClass('win')
  $main.removeClass('lose')
}

function playGame(){
  resetVariables()
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
