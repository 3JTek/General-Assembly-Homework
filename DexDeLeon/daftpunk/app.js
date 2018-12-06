document.addEventListener('DOMContentLoaded', () => {
  const audio = document.querySelectorAll('audio')
  const buttons = document.querySelectorAll('button.button')
  console.log(audio, buttons)

  function playAudio(audio){
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
      playAudio(audio[index])
    })
  })

})
