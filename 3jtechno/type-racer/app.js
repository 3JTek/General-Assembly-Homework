$(() => {
  const $textarea1 = $('textarea:first-of-type')
  const $textarea2 = $('textarea:last-of-type')
  const $wordCountDisplay = $('#wc')
  const $wordPerMinute = $('#wpm')
  let textToType, startTime, currentTime, characterNb, wordNb, elapsedTime, wordPerMin, restart
  const promptText = ' word per minuts, congratulations. Wanna try to beat this ? (y)'

  function updateCounters(){
    //Display nb of words completed so far
    wordNb = $textarea2.val().split(' ').length
    $wordCountDisplay.text(wordNb)
    //Grab a new timestamp
    currentTime = new Date().getTime()
    //Nb of words since the first letter has being typed
    elapsedTime = (currentTime - startTime)/1000/60
    wordPerMin = Math.floor(wordNb / elapsedTime)
    $wordPerMinute.text(wordPerMin)
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
    //If it is the last character, prompt the user to play again
    if(characterNb === $textarea1.val().length - 1){
      //Hack, delay the prompt to allow the last character to be displayed
      setTimeout(() => {
        restart = prompt(wordPerMin + promptText) === 'y'? true:false
        if(restart){
          initialiseGame()
        }
      },500)
    }
  }
  function initialiseGame(){
    //Initialise counters and text area
    $wordCountDisplay.text('0')
    $wordPerMinute.text('0')
    textToType = samples[Math.floor(Math.random() * samples.length)]
    $textarea1.text(textToType)
    $textarea2.val('')
  }

  $textarea2.on('keydown', checkLetterTyped)

  initialiseGame()
})
