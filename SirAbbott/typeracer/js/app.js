$(() => {

  const $textExample = $('.text-example')
  const $textarea = $('textarea')
  const $wordCount = $('.word-count')
  const sampleText = samples[Math.floor(Math.random() * samples.length)]
  const $wpmDisplay = $('.wpm-display')

  let count = 0, i =0
  let timePassed = 0
  let wpm =0
  function calculateWpm(count){
    wpm = Math.round((count / timePassed) * 60)
    if (wpm < 1000)$wpmDisplay.text(wpm)
  }

  function startTimer(){
    const timerId = setInterval(() => {
      timePassed++
      console.log(timePassed)
    },1000)

  }


  function increaseCount() {
    count ++
    $wordCount.text(count)
  }

  $textExample.text(sampleText)



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
})
