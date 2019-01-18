// below means the event will be happengn even if you're not typing in correct place

let $textarea, $example, $wordCount, $wordCountDisp, $wpm, $wpmDisp, $reset
let $timeRemaningHolder, $timeRemaning

let timerId, textToType, text = '', i = 0, wordcount = 0, time = 0, wpm = 0
let timeRemaining = 60, gameStart = false

function generateText() {
  textToType =  samples[Math.floor(Math.random() * samples.length)]
}

function calcwpm() {
  wpm = Math.round((wordcount/time) * 60)
  if(!isNaN(wpm) && wpm !== Infinity){
    $wpmDisp.text(wpm)
  }
}

function endgame() {
  if(text === textToType || timeRemaining === 0) {
    clearInterval(timerId)
    $reset.show()
    gameStart = false
    $example.css('border-color',' #719ECE')
  }
}

function startTime(){
  timerId = setInterval(() => {
    time++
    if(timeRemaining> 0){
      timeRemaining--
    }
    endgame()
    calcwpm()
    $timeRemaning.text(timeRemaining)
  }, 1000)
}

function reset() {
  wordcount = 0
  $wordCountDisp.text(wordcount)
  wpm = 0
  $wpmDisp.text(wpm)
  i = 0
  $textarea.val('')
  time=0
  timeRemaining = 60
  text = ''
  $example.css('border-color','')
  gameSetup()
}


function gameSetup(){
  $reset.hide()
  generateText()
  $timeRemaning.text(timeRemaining)
  $example.val(textToType)
  gameStart = true
}

function init(){
  //intitialize the dom element which will be needed later
  $textarea = $('#userInput')
  $example = $('#example')
  $wordCount = $('.word-count')
  $wordCountDisp = $wordCount.find('span')
  $wpm = $('.wpm')
  $wpmDisp = $wpm.find('span')
  $reset = $('.resetBtn')
  $timeRemaningHolder = $('.timeRemaning')
  $timeRemaning = $timeRemaningHolder.find('span')

  //intitialize the event listener
  $textarea.on('keydown', (e) => {
    if(e.key === textToType.charAt(i) && gameStart === true){
      // if the character is a space, [the wordcount increases by one
      if(textToType.charAt(i) === ' '){
        wordcount++
        $wordCountDisp.text(wordcount)
      }
      i++
      text += e.key
      $(e.target).css('border-color','green')
    }else{
      e.preventDefault()
      $(e.target).css('border-color','red')
    }
    if (i === 1 && gameStart === true) {
      startTime()
    }
  })
  $reset.on('click', reset)

  //intitialize the game
  gameSetup()
}

//invoke the init function when the dom has been loaded
$(() => init())
