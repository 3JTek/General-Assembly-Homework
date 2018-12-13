$(() => {
  // GLOBAL VARS
  const $textbox = $('.textbox')
  const $type = $('.type')
  const $wordCount = $('.word-count')
  let $wpm = $('.wordsPerMinute')
  let i = 0
  let counts = 0
  let iLastTime = 0
  let iTime = 0
  let iTotal = 0
  let iKeys = 0

  // GETS RANDOM TEXT
  function getRandom() {
    return randomText[Math.floor(Math.random() * randomText.length)]
  }
  const textToType = getRandom()
  $textbox.text(textToType)

  // GETS WORD COUNT
  $type.on('keydown', (e) => {
    if (e.key === textToType.charAt(i)) {
      i++
      if (e.key === ' ') {
        counts++
        $wordCount.text(counts)
      } else e.preventDefault()
    }
  })
   // GETS WORDS PER MIN

  function wpmcal() {
    iTime = new Date().getTime();

    if (iLastTime != 0) {
      iKeys++
      iTotal += iTime - iLastTime
    letonst  iWords = $('textarea').val().split(/\s/).length
      $('#CPM').html(Math.round(iKeys / iTotal * 6000, 2))
      $('#WPM').html(Math.round(iWords / iTotal * 6000, 2))
    }

    iLastTime = iTime
    iTime = $wpm
  }


})
