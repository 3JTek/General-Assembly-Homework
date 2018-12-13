

$(() => {

  const $textExample = $('.text-example')
  const $textarea = $('textarea')
  const $wordCount = $('.word-count')
  const $wpmDisplay = $('.wpm-display')
  const $resetBtn = $('#resetBtn')

  let sampleText
  let count = 0, i =0
  let timePassed = 0
  let wpm =0

  init()

  function startTimer(){
    setInterval(() => {
      timePassed++
    },1000)

  }


  function getRandomText(){
    sampleText = samples[Math.floor(Math.random() * samples.length)]
    $textExample.text(sampleText)
  }

  function calculateWpm(count){
    wpm = Math.round((count / timePassed) * 60)
    if (wpm < 1000)$wpmDisplay.text(wpm)
  }


  function increaseCount() {
    count ++
    $wordCount.text(count)
  }

  function init(){
    getRandomText()
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

  // function reset(){
  //   resetCount()
  //   init()
  // }
  //
  // $resetBtn.on('click', reset)

  // function resetCount(){
  //   count = 0
  //   i = 0
  //   timePassed =0
  //   wpm =0
  //   $textarea.val('')
  // }

})
