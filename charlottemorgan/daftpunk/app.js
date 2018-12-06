document.addEventListener('DOMContentLoaded', () => {
  console.log('js loaded')
  //find the squares
  const buttons = document.querySelectorAll('button')
  // play the sound with the corresponding id
  function music (e) {
    const song = document.querySelector('audio')
    song.src = './sounds/' + e.target.id + '.wav'
    song.play()
  }
  // loop through all of the buttons
  // add an eventListener to each button
  for (let i = 0; i < buttons.length; i++){
    // When you click on a button, run a function
    buttons[i].addEventListener('click', music)
    // find the id of the element that was clicked on
  }

})
