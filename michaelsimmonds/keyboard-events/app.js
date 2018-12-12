// below means the event will be happengn even if you're not typing in correct place
$(() => {
  const $textarea = $('textarea')
  const $example = $('#example')
  const $wordCount = $('.word-count')
  const $wordCountDisp = $wordCount.find('span')
  const $wpm = $('div.wpm')
  const $wpmDisp = $wpm.find('span')
  const $reset = $('button.resetBtn')
  let timerId
  let textToType

  function generateText() {
    textToType = 'a b c'
    // samples[Math.floor(Math.random() * samples.length)]
  }

  $reset.hide()
  generateText()

  $example.text(textToType)

  let i = 0
  let wordcount = 0
  let time = 0
  let wpm = 0
  let timeRemaining = 5

  function calcwpm() {
    wpm = Math.round((wordcount/time) * 60)
    if(!isNaN(wpm) && wpm !== Infinity){
      $wpmDisp.text(wpm)
    }
  }

  function endgame(text) {
    if(text === textToType || timeRemaining === 0) {
      clearInterval(timerId)
      //$textarea.off('keydown')
      // $textarea.preventDefault()
      timeRemaining =5
      $reset.show()
    }
  }

  function reset() {
    wordcount = 0
    $wordCountDisp.text(wordcount)
    wpm = 0
    $wpmDisp.text(wpm)
    i = 0
    $textarea.val('')
    time=0
  }

  $textarea.on('keydown', (e) => {
    if(e.key === textToType.charAt(i)){
      // if the character is a space, [the wordcount increases by one
      if(textToType.charAt(i) === ' '){
        wordcount++
        $wordCountDisp.text(wordcount)
        calcwpm()
      }
      i++
    } else e.preventDefault()  // prevents typing anything but correct thing being typed
    // below starts a timer from the moment the first letter is typed
    if (i === 1) {
      timerId = setInterval(() => {
        time++
        timeRemaining--
        console.log(`time remaning ${timeRemaining}`)
        endgame(e.target.value)

      }, 1000)
    }
    console.log(`time ${time}`)

  })

  $reset.on('click', reset)

})
