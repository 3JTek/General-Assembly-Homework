document.addEventListener('DOMContentLoaded', () => {
  const audio = document.querySelectorAll('audio')
  const btn = document.querySelectorAll('button')

  btn.addEventListener('click', () => {
    if(audio.paused) {
      audio.play()
    } else {
      audio.pause()
      audio.currentTime = 0
    }
  })

})
