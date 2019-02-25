/* global samples */
$(() => {
  const textToType = samples[Math.floor(Math.random() * samples.length)]
  const $textarea1 = $('textarea:first-of-type')
  const $textarea2 = $('textarea:last-of-type')
  const $wordCountDisplay = $('#wc')
  const $wordPerMinute = $('#wpm')
  let startTime
  let currentTime

  //Initialise counters and text area
  $wordCountDisplay.text('0')
  $wordPerMinute.text('0')
  $textarea1.text(textToType)

  let i=0

  $textarea2.on('keydown', (e) => {
    //Good Letter
    if (e.key === textToType.charAt(i)){
      //If first letter, grab timestamp
      if(i === 0){
        startTime = new Date().getTime()
      }
      if(e.key === ' '){
        //Display no of words completed so far
        $wordCountDisplay.text($textarea2.val().split(' ').length)
        //Grab a timestamp
        currentTime = new Date().getTime()
        //Nb of words since the first letter has being typed
        $wordPerMinute.text(Math.floor($textarea2.val().split(' ').length / ((currentTime - startTime)/1000/60)))
      }
      i++
    }else{
      //Wrong letter
      e.preventDefault()
    }
  })
})
