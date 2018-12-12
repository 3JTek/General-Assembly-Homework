// below means the event will be happengn even if you're not typing in correct place
$(() => {
  const textToType = 'a b c'
  // samples[Math.floor(Math.random() * samples.length)]

  const $textarea = $('textarea')
  const $example = $('#example')
  const $wordCount = $('.word-count')
  const $wordCountDisp = $wordCount.find('span')
  const $wpm = $('div.wpm')
  const $wpmDisp = $wpm.find('span')
  const $reset = $('button.resetBtn')
  let timerId


  $reset.hide()

  $example.text(textToType)

  let i = 0
  let wordcount = 0
  let time = 0
  let wpm = 0

  function wpm() {
    wpm = Math.round((wordcount/time) * 60)
    if(!isNaN(wpm) && wpm !== Infinity){
      $wpmDisp.text(wpm)
    }
  }

  function endgame(text, timer) {
    if(text === textToType){
      clearInterval(timer)
      $reset.show()
    }
  }

  function reset() {
    wordcount = 0
    $wordCountDisp.text(wordcount)
    wpm = 0
    $wpmDisp.text(wpm)
  }

  $textarea.on('keydown', (e) => {
    if(e.key === textToType.charAt(i)){
      // if the character is a space, [the wordcount increases by one
      if(textToType.charAt(i) === ' '){
        wordcount++
        $wordCountDisp.text(wordcount)
        wpm()
      }
      i++
    } else e.preventDefault()  // prevents typing anything but sample
    // below starts a timer from the moment the first letter is typed
    if (i === 1) {
      timerId = setInterval(() => time++, 1000)
    }
    endgame(e.target.value, timerId)
    console.log(time)
  })

})
