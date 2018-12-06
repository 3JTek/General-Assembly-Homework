document.addEventListener('DOMContentLoaded', () => {
  const audio = document.querySelector('audio')
  const btn = document.querySelector('button')

  btn.addEventListener('click', () => {
    if(audio.paused) {
      audio.play()
    } else {
      audio.pause()
      audio.currentTime = 0
    }
  })

})
