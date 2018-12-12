$(()=>init())
//declare Variables
// let $main
let $sampleTextBox
let $resultsTextBox
let $infoBar
let $inputTextBox
let $wordCountBox
let $playButton
let $wpmBox
let $countDown
let startTime
let index
let wordCount
let currentSample
let timerRemaining
let timerId
let letterCorrect

const gameLength = 60

function init(){

  //Get DOM elementss
  // $main = $('main')
  $sampleTextBox = $('.sample-text-box')
  $infoBar = $('.info-bar')
  $resultsTextBox = $('.results-text-box')
  $inputTextBox = $('.input-text-box')
  $wordCountBox = $('.word-count-box')
  $playButton = $('.play-button')
  $wpmBox = $('.wpm-box')
  $countDown = $('.count-down')

  //Add event listeners
  $playButton.on('click', playGame)
  $inputTextBox.on('keydown', gameLogic)

  //Reset Variables
  resetVariables()
}

function checkForWin() {
  //If the index of the letter is equal to the length of the text
  if(currentSample.length === index){
    //Game Won!!!
    $infoBar.addClass('win')
    gameOver()
  }
}

//Fired on every key down
function gameLogic(e) {
  if(startTime === undefined){

    //Get the time the game was started
    startTime = new Date()

    //During game set text to Reset
    $playButton.text('Reset')
  }

  //Letter is used in letterAccuracy Object
  const letter = e.key.toLowerCase()

  //What letter are we expecting next
  const targetLetter = currentSample[index].charAt(6)

  //Make lower case for letterAccuracy when wrong key is pressed
  const targetLetterLower = targetLetter.toLowerCase()

  //If key is the target letter and there is time remainig on the clock
  if(e.key === targetLetter && timerRemaining>0) {

    //If this was the first attempt and it was succesful
    if(letterCorrect){
      //Label as a 'good' letter
      $sampleTextBox.children().eq(index).addClass('good')
    }else{
      //Label as a 'bad' letter
      $sampleTextBox.children().eq(index).addClass('bad')
    }

    //If this character is in the object
    if(letterAccuracy[letter]){

      //Increase the good count and total count
      letterAccuracy[letter]['good']++
      letterAccuracy[letter]['total']++
    }

    //Pre-set letter correct to true for next letter
    //(set to false if wrong letter typed)
    letterCorrect = true

    //Increase the index of the expected letter
    index++

    checkForWin()

    //If character was a space update word count and words per minute
    if(e.key === ' '){
      incWordCount()
      updateWPM()
    }

    //If key pressed was not correct
  } else {

    //Prevent the letter being displayed in text area
    e.preventDefault()

    //If the key was not the shift key and there is time on the clock...
    if(e.key !== 'Shift' && timerRemaining>0){

      //Say that this letter has been attempted incorrectly
      letterCorrect = false

      //If the letter exits in the letterAccuracy object increase this letters total
      letterAccuracy[targetLetterLower] && letterAccuracy[targetLetterLower]['total']++

    }
  }
}

//Called when the game is won or lost
function gameOver(){
  //Clear the timer
  clearInterval(timerId)

  //Hide the input box
  $inputTextBox.hide()

  //Change play button text
  $playButton.text('Play Again')

  //Show the results box
  $resultsTextBox.show()

  //Get an array of all the key of the accuracy object
  const results = Object.keys(letterAccuracy)
  //Map if their is a value in the object for the element,
    .map(elem=>{
      //If the total is not Zero (to avoid dividing by zero)
      if (letterAccuracy[elem]['total'])
        //Return the good-count/total-count * 100
        return `${elem}: ${Math.round((letterAccuracy[elem]['good']/letterAccuracy[elem]['total'])*100)}%`
    })
    //Filter out empty elements
    .filter(elem => !!elem)
    //Wrap in a div tag
    .map((elem)=>`<div>${elem}</div>`)

  //Set the html of the results box (this works even though results is an array!)
  $resultsTextBox.html(results)
}

//Countdown timer
function timer(){

  //Call this function again in 1sec
  timerId = setTimeout(timer, 1000)

  //If there is no time left
  if(timerRemaining === 0) {
    //Add lose class to infoBar
    $infoBar.addClass('lose')
    //Do end of game things
    gameOver()
  }

  //If there is time left on countdown
  //Update the countdown timer text box
  $countDown.text(timerRemaining)

  //Decrease the remaining time
  timerRemaining--
}

function resetVariables(){
  //RESET
  index = 0
  wordCount = 0
  timerRemaining = gameLength
  letterCorrect = true
  startTime = undefined

  //Reset text boxes
  $wordCountBox.text(wordCount)
  $wpmBox.text('0')
  $countDown.text(timerRemaining)

  //Hide results
  $resultsTextBox.hide()

  //Clear textarea and show it
  $inputTextBox.val('')
  $inputTextBox.show()

  //Clear infoBar classes
  $infoBar.removeClass('win')
  $infoBar.removeClass('lose')
}

//Starts the game
function playGame(){
  //Get random text
  currentSample = samples[Math.floor(Math.random()*samples.length)]
  //Split the text into an array with each letter wrapped in a span
  currentSample = currentSample.split('').map((letter)=> `<span>${letter}</span>`)
  //Set the sample text box html to array
  $sampleTextBox.html(currentSample)

  //Initialize variables and timers
  resetVariables()
  clearInterval(timerId)
  timer()
}

function incWordCount(){
  //Increase word count and update text box
  wordCount++
  $wordCountBox.text(wordCount)
}

function updateWPM(){
  //Get the time now
  const now = new Date()

  //Difference between now and the time the game started in Ms
  const diff = now - startTime

  //Convert diff to Mins
  const diffMins = diff/(1000*60)

  //Update words per minute text box
  $wpmBox.text(Math.round(wordCount /diffMins))
}
