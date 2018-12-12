/* global randomText */

$(() => {
  const $textbox = $('.textbox')
  const $type = $('.type')
  const $wordCount = $('.word-count')
  let $wpm = $('.wordsPerMinute')
  let i = 0
  let counts = 0

  function getRandom() {
    return randomText[Math.floor(Math.random() * randomText.length)]
  }
  const textToType = getRandom()

  $textbox.text(textToType)

  function counter() {
    $type.on('keydown', (e) => {
      if (e.key === textToType.charAt(i)) {
        i++
        if (e.key === ' ') {
          counts++
          $wordCount.text(counts)
        } else e.preventDefault()
      }
    })
  }
  counter()

  // function calculateWpm() {
  //   $wpm = Math.round(($wordCount/counts) * 60)
  //   if($wordCount > 1){
  //     return $wpm.text($wpm)
  //   }else {
  //     return ('')
  //   }
  // }
  // console.log(calculateWpm())

})
