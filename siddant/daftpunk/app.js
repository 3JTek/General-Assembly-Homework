document.addEventListener('DOMContentLoaded', () => {
  const musicButton = document.querySelectorAll('.btn')
  const sound = document.querySelector('#sound')

  musicButton.forEach(musicButton => {
    musicButton.addEventListener('click', (e) => {
      sound.setAttribute('src','sounds/'+e.target.value+'.wav')
      sound.play()
    })

  })

})
