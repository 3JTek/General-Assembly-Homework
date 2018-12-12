$(() => {

  const $sampleTextBox = $('.sample-text-box')
  const $inputTextBox = $('.input-text-box')
  const $wordCountBox = $('.word-count-box')
  const $resetButton = $('.reset-button')
  const $wpmBox = $('.wpm-box')
  let startTime
  let index
  let wordCount
  let currentSample





  $inputTextBox.on('keydown', e => {
    if(startTime === undefined) startTime = new Date()
    console.log(e.key)
    if(e.key === currentSample.charAt(index)) {
      index++
      incWordCount(e)

    } else {
      e.preventDefault()
    }
  })

  function init(){
    index = 0
    wordCount = 0
    startTime = undefined
    currentSample = samples[Math.floor(Math.random()*samples.length)]
    $sampleTextBox.text(currentSample)
    $inputTextBox.val('')
    console.log($inputTextBox)

  }

  $resetButton.on('click', init)



  function incWordCount(e){
    if(e.key === ' '){
      $wordCountBox.text(++wordCount)
      const now = new Date()
      const diff = now - startTime
      const diffMins = diff/(1000*60)
      console.log('Diff '+diff/1000)
      console.log('WPM '+ wordCount /diffMins)
      $wpmBox.text(Math.round(wordCount /diffMins))
    }
    console.log(wordCount)
  }













})
