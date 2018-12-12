// below means the event will be happengn even if you're not typing in correct place
let $textarea,
  $example,
  $wordCount,
  $wordCountDisp,
  $wpm,
  $wpmDisp,
  $reset,
  i = 0,
  wordcount = 0,
  time = 0,
  wpm = 0,
  timeRemaining = 1,
  timerId,
  textToType,
  $timeRemainingDisp

function generateText() {
  textToType = samples[Math.floor(Math.random() * samples.length)]
  $example.text(textToType)
}

function calcwpm() {
  wpm = Math.round((wordcount/time) * 60)
  if(!isNaN(wpm) && wpm !== Infinity){
    $wpmDisp.text(wpm)
  }
}

function endgame(text) {
  if(text === textToType || timeRemaining === 0) {
    clearInterval(timerId)
    $textarea.attr('disabled','disabled')
    $reset.show()
  }
}

function reset() {
  wordcount = 0
  $wordCountDisp.text(wordcount)
  wpm = 0
  $wpmDisp.text(wpm)
  i = 0
  $textarea.val('')
  time=0
  timeRemaining = 10
  $reset.hide()
  $textarea.removeAttr('disabled')
  generateText()
}

function gamestart() {
  $textarea.on('keydown', (e) => {
    if(e.key === textToType.charAt(i)){
      // if the character is a space...
      if(textToType.charAt(i) === ' '){
        // ...the wordcount increases by one and the display is updated
        wordcount++
        $wordCountDisp.text(wordcount)
        calcwpm()
      }
      // the index is increased by one to move to the next letter
      i++
      if (i === 1) {
        timerId = setInterval(() => {
          time++
          timeRemaining--
          $timeRemainingDisp.text(timeRemaining)
          endgame(e.target.value)
        }, 1000)
      }
    } else e.preventDefault()  // prevents typing anything but correct thing being typed
  })
}

$(() => {

  $textarea = $('textarea')
  $example = $('#example')
  $wordCount = $('.word-count')
  $wordCountDisp = $wordCount.find('span')
  $wpm = $('div.wpm')
  $wpmDisp = $wpm.find('span')
  $reset = $('button.resetBtn')
  $timeRemainingDisp = $('.time-remaining').find('span')



  $reset.hide()
  generateText()
  gamestart()
  $reset.on('click', reset)
  $wordCountDisp.text('0')
  $timeRemainingDisp.text(timeRemaining)

})
