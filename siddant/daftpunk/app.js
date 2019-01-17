document.addEventListener('DOMContentLoaded', () => {
  const musicButton = document.querySelectorAll('.btn')
  const sound = document.querySelector('#sound')
  const rand = document.querySelector('#random')
  let previousValue =''

  musicButton.forEach(musicButton => {
    musicButton.addEventListener('click', (e) => {
      sound.setAttribute('src','sounds/'+e.target.value+'.wav')
      sound.play()
    })
  })

  musicButton.forEach(musicButton => {
    musicButton.addEventListener('mouseover', (e) => {
      previousValue = e.target.textContent
      e.target.textContent = ''
      e.target.style.backgroundImage = 'url(\'gif/'+e.target.value+'.gif\')'
      e.target.style.backgroundRepeat= 'no-repeat'
      e.target.style.backgroundSize = 'contain'
    })

  })
  musicButton.forEach(musicButton => {
    musicButton.addEventListener('mouseout', (e) => {
      e.target.style.backgroundImage = 'url(\'\')'
      console.log(previousValue)
      e.target.textContent =  previousValue
    })
  })

  rand.addEventListener('click', () => {
    sound.setAttribute('src','sounds/'+musicButton[Math.floor(Math.random() * 16)].value+'.wav')
    sound.play()
  })

})
