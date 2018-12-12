// below means the event will be happengn even if you're not typing in correct place
$(() => {
  const $textarea = $('#userInput')
  const $example = $('#example')
  const $wordCount = $('.word-count')
  const $wordCountDisp = $wordCount.find('span')
  const $wpm = $('.wpm')
  const $wpmDisp = $wpm.find('span')
  const $reset = $('.resetBtn')
  const $timeRemaningHolder = $('.timeRemaning')
  const $timeRemaning = $timeRemaningHolder.find('span')

  let timerId
  let textToType, text = ''
  let i = 0, wordcount = 0, time = 0, wpm = 0, timeRemaining = 60, gameStart = false

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
      $example.css('border-color','red')

    }
  }

  function startTime(){
    timerId = setInterval(() => {
      time++
      timeRemaining--
      endgame()
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
    $reset.hide()
    text = ''
    generateText()
    $example.val(textToType)
    gameStart = true
    $timeRemaning.text(timeRemaining)
    $example.css('border-color','')
  }

  function gameSetup(){
    $reset.hide()
    generateText()
    $timeRemaning.text(timeRemaining)
    $example.val(textToType)
    gameStart = true
  }


  $textarea.on('keydown', (e) => {
    if(e.key === textToType.charAt(i) && gameStart === true){
      // if the character is a space, [the wordcount increases by one
      if(textToType.charAt(i) === ' '){
        wordcount++
        $wordCountDisp.text(wordcount)
        calcwpm()
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
  gameSetup()
})
