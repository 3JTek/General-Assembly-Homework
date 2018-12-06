document.addEventListener('DOMContentLoaded', () => {
  const audio = document.querySelector('audio')
  const buttons = document.querySelectorAll('button')

  buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      audio.setAttribute('src', './sounds/'+e.target.value+'.wav')
      audio.play()
    })
  })




})
