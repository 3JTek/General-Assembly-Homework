document.addEventListener('DOMContentLoaded', () => {
  console.log('js loaded')
  //find the squares that in the grid
  const buttons = document.querySelectorAll('button')
  // play the sound with the corresponding id.
  // This function finds the audio tag in the html and then gives the source to the button using its id. First we are creating a variable song to find the tag in the html. Then we are telling it the source using the id which matches the song name in the html. Then we are telling it to play the song
  function music (e) {
    const song = document.querySelector('audio')
    song.src = './sounds/' + e.target.id + '.wav'
    song.play()
  }
  // loop through all of the buttons that we have created. We create a variable i which is equal to zero. while this variables index is less than the number of buttons(length),which is 16, then add one and run it again.
  for (let i = 0; i < buttons.length; i++){
    // add an eventListener to each button
    // When you click on the button, run the function music
    buttons[i].addEventListener('click', music)
  }

})
