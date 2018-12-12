document.addEventListener('DOMContentLoaded', () => {
  const audios = document.querySelectorAll('audio')
  const buttons = document.querySelectorAll('button')
  console.log(buttons)
  for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
      audios[i].play()
    })
  }
})
