document.addEventListener('DOMContentLoaded', () => {
  const tunes = document.querySelectorAll('audio')
  const buttons = document.querySelectorAll('button')

  function playAudio (audio) {
    if(audio.paused) {
      audio.play()
    } else {
      audio.pause()
      audio.currentTime = 0
    }
  }

  buttons.forEach((button, i) => {
    button.addEventListener('click',() => {
      playAudio(tunes[i])

    })

  })

})
