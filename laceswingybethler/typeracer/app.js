/* global samples */
$(() =>  {

  const $text = $('.text')
  const $input = $('.input')
  const $wordcount = $('.word-count')
  const $wpm = $('.wpm')
  const $resetBtn =$('.resetBtn')

  playGame()
  function playGame(){
    let wordCount = 0
    let i = 0
    const textSamples = samples[Math.floor(Math.random() * samples.length)]
    $text.text(textSamples)

    //add event listener for key up, only type if input matches text
    $input.on('keydown', (e) => {
      if(i === 1) startTimer()
      if(e.key === textSamples.charAt(i)) {
        i++
        wordCounter(e)
        $wordcount.text(`Your word count is ${wordCount}`)
        calculateWpm()
      } else {
        e.preventDefault()
      }
    })

    function wordCounter(e) {
      if(e.key === ' ') wordCount++
      return wordCount
    }

    //calculate wpm
    // start timer on key down
    //wpm = number of words counted at given time divided by current time * (60 * 1000)
    let timePassed = 0
    let wordsPerMinute = 0
    function calculateWpm() {
      wordsPerMinute = Math.round((wordCount/timePassed) * 60)
      if(wordCount > 1){
        return $wpm.text(`Your typing speed is ${wordsPerMinute} WPM`)
      }else {
        return ('')
      }
    }

    function startTimer(){
      const timerId = setInterval(() => {
        timePassed++
        console.log(timePassed)
      }, 1000)
    }
  }
  function reset(e) {
    $input.val('')
    $wordcount.text('Your word count is')
    $wpm.text('Your typing speed is WPM')
    playGame()
  }
  $resetBtn.on('click', reset)


})
