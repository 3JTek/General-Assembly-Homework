/* global samples */
$(() => {
  let textToType
  const $textarea1 = $('textarea:first-of-type')
  const $textarea2 = $('textarea:last-of-type')
  const $wordCountDisplay = $('#wc')
  const $wordPerMinute = $('#wpm')
  const $resetBtn = $('.resetBtn')
  let startTime
  let currentTime
  let i=0

  //Initialise counters and text area
  $wordCountDisplay.text('0')
  $wordPerMinute.text('0')

  function random(){
    textToType = samples[Math.floor(Math.random() * samples.length)]
    $textarea1.text(textToType)
  }

  random()

  function reset(){
    // create new text on textarea1
    random()
    $textarea2.val('')
    $wordCountDisplay.text('0')
    $wordPerMinute.text('0')
    i=0
  }

  $resetBtn.on('click', reset)
  $textarea2.on('keydown', (e) => {
  //Correct Letter
    if (e.key === textToType.charAt(i)){
    //If first letter is typed correctly, grab timestamp
      if(i === 0){
        startTime = new Date().getTime()
      }
      if(e.key === ' '){
      //Display no of words completed so far
        $wordCountDisplay.text($textarea2.val().split(' ').length)
        //Grab a timestamp
        currentTime = new Date().getTime()
        //No of words since the first letter has being typed
        $wordPerMinute.text(Math.floor($textarea2.val().split(' ').length / ((currentTime - startTime)/1000/60)))
      }
      i++
    } else{
    //Wrong letter
      e.preventDefault()
    }
  })
})
