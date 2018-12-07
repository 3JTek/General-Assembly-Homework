document.addEventListener('DOMContentLoaded', () => {
  const musicButton = document.querySelectorAll('.btn')
  const sound = document.querySelector('#sound')

  //loop through each button
  musicButton.forEach(musicButton => {
  //add addEventListener to and pass in the event arguement
    musicButton.addEventListener('click', (e) => {
      //when the button is click send the e.target.value and concat to sounds/....wav
      //set src attr to sounds/'+e.target.value+'
      sound.setAttribute('src','sounds/'+e.target.value+'.wav')
      sound.play()
    })

  })

})
