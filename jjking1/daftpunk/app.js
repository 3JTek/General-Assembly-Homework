document.addEventListener('DOMContentLoaded', () => {
  const audio = document.querySelector('audio')
  const buttons = document.querySelectorAll('.btn')
  const randomBtn = document.querySelector('#randomBtn')
  buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      audio.setAttribute('src', './sounds/'+e.target.value+'.wav')
      audio.play()
    })
  })

  const randomElement = (array => {
    return (array[Math.floor(Math.random()*array.length-1)]).value
  })

  console.log(randomElement(buttons))

  randomBtn.addEventListener('click', (e) => {
    audio.setAttribute('src', './sounds/'+randomElement(buttons)+'.wav')
    audio.play()
  })

})
