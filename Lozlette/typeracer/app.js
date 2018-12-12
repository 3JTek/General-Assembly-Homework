/* global randomText */

$(() => {
  const $textbox = $('.textbox')
  const $type = $('.type')
  let i = 0
  let hitCount = 0
  const $wordCount = $('.word-count')
  // console.log($randomText)
  // textbox LINK to sample texts array to show
  function getRandom() {
    return randomText[Math.floor(Math.random() * randomText.length)]
  }
  const textToType = getRandom()

  $textbox.text(textToType)
  // $randomText = $textbox
  // format type box to only allow correct keys down
  console.log(textToType)
  $type.on('keydown', (e) => {
    if (e.key === textToType.charAt(i)) i++
    else e.preventDefault()
  })

  function hits () {
    document.body.onkeyup = function(e) {
      if( e.keyCode === 32 ) {
        return hitCount++
      }
    }
    }
$wordCount.text = hitCount
  console.log(hitCount)
  // var renderHits = function() {
  // hitElement.innerHTML = hits;
  // }
  //
  // var resetHits = function() {
  // hits = 0;
  // renderHits();


})
