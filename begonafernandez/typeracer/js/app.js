$(() => {
  const $textExample = $('.text-example')
  const $textarea = $('textarea')
  const $wordCount = $('.word-count')
  const $wpmDisplay = $('.wpm-display')

  let count = 0, i =0
  let timePassed = 0
  let wpm = 0
  let sampleText

  function generateRandomText() {
    sampleText = samples[Math.floor(Math.random() * samples.length)]
    $textExample.text(sampleText)
  }
  function calculateWpm(count){
    wpm = Math.round((count / timePassed) * 60)
    if (wpm < 1000)$wpmDisplay.text(wpm)
  }

  function startTimer(){
    setInterval(() => {
      timePassed++
      console.log(timePassed)
    },1000)

  }

  function increaseCount() {
    count ++
    $wordCount.text(count)
  }

  function init() {
    generateRandomText()
    $textarea.on('keydown', (e) => {
      if (i === 1) startTimer()
      if(e.key === sampleText.charAt(i)){
        i++
        if (e.key === ' '){
          increaseCount()
          calculateWpm(count)
        }
      } else e.preventDefault()
    })
  }

  init()
})
