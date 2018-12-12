$(() => {

  const $sampleTextBox = $('.sample-text-box')
  const $inputTextBox = $('.input-text-box')
  let index = 0
  const currentSample = samples[Math.floor(Math.random()*samples.length)]



  $sampleTextBox.text(currentSample)

  $inputTextBox.on('keypress', e => {
    // console.log(e.key)
    // if(e.key === currentSample.charAt(index)) {
    //   index++
    // } else {
    e.preventDefault()
    // }
  })
  











})
