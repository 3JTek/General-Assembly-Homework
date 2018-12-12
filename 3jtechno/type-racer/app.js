$(() => {
  const textToType = samples[Math.floor(Math.random() * samples.length)]
  const $textarea1 = $('textarea:first-of-type')
  const $textarea2 = $('textarea:last-of-type')
  const $wordCountDisplay = $('#wc')
  const $wordPerMinute = $('#wpm')
  let startTime, currentTime, characterNb, wordNb, elapsedTime

  //Initialise counters and text area
  $wordCountDisplay.text('0')
  $wordPerMinute.text('0')
  $textarea1.text(textToType)

  function updateCounters(){
    //Display nb of words completed so far
    wordNb = $textarea2.val().split(' ').length
    $wordCountDisplay.text(wordNb)
    //Grab a new timestamp
    currentTime = new Date().getTime()
    //Nb of words since the first letter has being typed
    elapsedTime = (currentTime - startTime)/1000/60
    $wordPerMinute.text(Math.floor(wordNb / elapsedTime))
  }

  function checkLetterTyped(e){
    //Find current index (How many characters so far typed by the user)
    characterNb = $textarea2.val().length
    //Good Letter
    if (e.key === textToType.charAt(characterNb)){
      //If first letter, grab timestamp (time in ms since 1970)
      if(characterNb === 0){
        startTime = new Date().getTime()
      }
      if(e.key === ' '){
        updateCounters()
      }
    //Wrong letter
    }else{
      //Prevent the textArea to display the letter typed
      e.preventDefault()
    }
  }

  $textarea2.on('keydown', checkLetterTyped)

})
