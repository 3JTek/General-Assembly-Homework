document.addEventListener('DOMContentLoaded', () => {
  const musicButton = document.querySelectorAll('.btn1,.btn2,.btn3,.btn4')
  const sound = document.querySelector('#sound')

  musicButton.forEach(musicButton => {
    musicButton.addEventListener('click', (e) => {
      sound.setAttribute('src','sounds/'+e.target.value+'.wav')
      sound.play()
    })
  })
})
