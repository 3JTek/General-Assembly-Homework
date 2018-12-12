$(() => {
  const $textExample = $('.text-example')
  const $textarea = $('textarea')
  const $wordCount = $('.word-count span')
  const $wpmDisplay = $('.wpm-display span')
  const $timerDisplay = $('.timer')

  let wordCount = 0
  let i = 0
  let timePassed = 60
  let wpm = 0
  let sampleText

  function generateRandomText() {
    sampleText = samples[Math.floor(Math.random() * samples.length)]
    $textExample.text(sampleText)
  }

  function startTimer(){
    if (i === 1) {
      setInterval(() => {
        timePassed--
        $timerDisplay.text(timePassed)
      },1000)
    }
  }

  function calculateWpm(wordCount){
    wpm = Math.round((wordCount / timePassed) * 60)
    if (wpm < 1000)$wpmDisplay.text(wpm)
  }


  function increaseWordCount() {
    wordCount ++
    $wordCount.text(wordCount)
  }

  function updateScoreBoardOnWordCompletion(e) {
    if (e.key === ' '){
      increaseWordCount()
      calculateWpm(wordCount)
    }
  }

  function showOnlyCorrectCharacters(e) {
    if(e.key === sampleText.charAt(i)){
      i++
    } else e.preventDefault()
  }

  function playTypeRacer() {
    $textarea.on('keydown', (e) => {
      startTimer()
      showOnlyCorrectCharacters(e)
      updateScoreBoardOnWordCompletion(e)
    })
  }

  function init() {
    generateRandomText()
    playTypeRacer()
  }

  init()
})
