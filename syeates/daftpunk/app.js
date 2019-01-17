document.addEventListener('DOMContentLoaded', () => {
  const audio = document.querySelectorAll('audio')
  const buttons = document.querySelectorAll('button')
  console.log(audio, buttons)

  function playAudioOnClick(audio){
    if(audio.paused) {
      audio.play()
    } else {
      audio.pause()
      audio.currentTime = 0
    }
  }

  buttons.forEach(function(button, index){
    console.log(index)
    console.log(audio[index])
    button.addEventListener('click', () => {
      playAudioOnClick(audio[index])
    })
  })

})
