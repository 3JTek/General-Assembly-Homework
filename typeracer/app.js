/* global samples */
$(() =>  {

  const $text = $('.text')
  const $input = $('.input')
  const $wordcount = $('.word-count')
  const $wpm = $('.wpm')
  const $resetBtn =$('.resetBtn')
  const $startBtn = $('.startBtn')
  let timerId
  let timePassed = 0
  let wordsPerMinute = 0
  let wordCount = 0
  let gameStarted

  function wordCounter(e) {
    if(e.key === ' ') wordCount++
    return wordCount
  }

  function calculateWpm() {
    wordsPerMinute = Math.round((wordCount/timePassed) * 60)
    if(wordCount > 1){
      return $wpm.text(`Your typing speed is ${wordsPerMinute} WPM`)
    }else {
      return ('')
    }
  }

  function startTimer(){
    timerId = setInterval(() => {
      timePassed++
      console.log(timePassed)
    }, 1000)
  }
  function playGame(){
    if (gameStarted) {
      console.log('game started')
      let i = 0
      const textSamples = samples[Math.floor(Math.random() * samples.length)]
      $text.text(textSamples)

      $input.on('keydown', (e) => {
        if(e.key === textSamples.charAt(i)) {
          i++
          wordCounter(e)
          $wordcount.text(`Your word count is ${wordCount}`)
          calculateWpm()
        } else {
          e.preventDefault()
        }
      })
    }else {
      return null
    }
  }
  function startGame() {
    gameStarted = true
    startTimer()
    playGame()
  }

  function reset() {
    $input.val('')
    $wordcount.text('Your word count is')
    $wpm.text('Your typing speed is WPM')
    timePassed = 0
    clearInterval(timerId)
    gameStarted = false
    $input.off()
  }
  $startBtn.on('click', startGame)
  $resetBtn.on('click', reset)



})
