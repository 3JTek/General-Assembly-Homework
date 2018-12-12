$(() => {
  const $textExample = $('.text-example')
  const $textarea = $('textarea')
  const $wordCount = $('.word-count span')
  const $wpmDisplay = $('.wpm-display span')

  let count = 0
  let i = 0
  let timePassed = 0
  let wpm = 0
  let sampleText

  function generateRandomText() {
    sampleText = samples[Math.floor(Math.random() * samples.length)]
    $textExample.text(sampleText)
  }

  function startTimer(){
    if (i === 1) {
      setInterval(() => {
        timePassed++
      },1000)
    }
  }

  function calculateWpm(count){
    wpm = Math.round((count / timePassed) * 60)
    if (wpm < 1000)$wpmDisplay.text(wpm)
  }


  function increaseCount() {
    count ++
    $wordCount.text(count)
  }

  function updateScoreBoardOnWordCompletion(e) {
    if (e.key === ' '){
      increaseCount()
      calculateWpm(count)
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
