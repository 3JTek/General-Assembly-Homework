$(() => {

  const $textExample = $('.text-example')
  const $textarea = $('textarea')
  const $wordCount = $('.word-count')
  const $wpmDisplay = $('.wpm-display')
  const $resetBtn = $('.reset-button')
  const $startBtn = $('.start-button')

  let count = 0
  let i = 0
  let timePassed = 0
  let wpm = 0
  let sampleText
  let startTime
  let gameOn


  function init() {
    gameOn = true
    playGame()
  }

  function startTimer() {
    timePassed = 0
    startTime = setInterval(() => {
      console.log(timePassed)
      timePassed++
    }, 1000)

  }

  function calculateWpm() {
    wpm = Math.round((count / timePassed) * 60)
    if (wpm < 1000) $wpmDisplay.text(wpm)
  }

  function generateText() {
    sampleText = samples[Math.floor(Math.random() * samples.length)]
    $textExample.text(sampleText)
  }


  function increaseCount() {
    count++
    $wordCount.text(count)
  }

  function playGame() {
    if (gameOn) {
      generateText()
      $textarea.on('keydown', type)
    }
  }

  function type(e) {
    if (i === 1) startTimer()
    if (e.key === sampleText.charAt(i)) {
      i++
      if (e.key === ' ') {
        increaseCount()
        calculateWpm()
      }
    } else e.preventDefault()
  }

  function resetCounter() {
    count = 0
    timePassed = 0
    i = 0
    wpm = 0
    $textarea.val('')
    $wpmDisplay.text('')
    $textarea.off('keydown', type)
  }

  function resetGame() {
    clearInterval(startTime)
    resetCounter()
    gameOn = false
  }

  $startBtn.on('click', init)
  $resetBtn.on('click', resetGame)

})