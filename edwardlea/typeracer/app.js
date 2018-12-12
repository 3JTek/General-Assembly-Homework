$(() => {



  const $sampleTextBox = $('.sample-text-box')
  const $inputTextBox = $('.input-text-box')
  const $wordCountBox = $('.word-count-box')
  const $resetButton = $('.reset-button')
  const $wpmBox = $('.wpm-box')
  const $countDown = $('.count-down')
  let startTime
  let index
  let wordCount
  let currentSample
  let timerRemaining
  let timerId
  init()

  function checkForWin() {
    if(currentSample.length === index){
      //Game Won!!!
      $inputTextBox.addClass('win')
      clearInterval(timerId)
    }

  }

  $inputTextBox.on('keydown', gameLogic)

  function gameLogic(e) {
    if(startTime === undefined) startTime = new Date()
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
    }
    $countDown.text(timerRemaining)
    timerRemaining--
  }


  function init(){
    index = 0
    wordCount = 0
    $wordCountBox.text('0')
    $wpmBox.text('0')
    timerRemaining = 10
    startTime = undefined
    currentSample = samples[Math.floor(Math.random()*samples.length)]
    $sampleTextBox.text(currentSample)
    $inputTextBox.val('')
    $inputTextBox.removeClass('win')
    $inputTextBox.removeClass('lose')
    clearInterval(timerId)
    timer()
  }

  $resetButton.on('click', init)

  function incWordCount(e){
    if(e.key === ' '){
      $wordCountBox.text(++wordCount)
      const now = new Date()
      const diff = now - startTime
      const diffMins = diff/(1000*60)
      $wpmBox.text(Math.round(wordCount /diffMins))
    }
  }
})
