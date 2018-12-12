/* global randomText */

$(() => {
  const $textbox = $('.textbox')
  const $type = $('.type')
  let i = 0
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
})
