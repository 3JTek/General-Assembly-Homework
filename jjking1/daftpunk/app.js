document.addEventListener('DOMContentLoaded', () => {
  const audio = document.querySelector('audio')
  const buttons = document.querySelectorAll('.btn')
  const randomBtn = document.querySelector('#randomBtn')

  // general buttons logic
  buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      audio.setAttribute('src', './sounds/'+e.target.value+'.wav')
      audio.play()
    })
  })

  // produces value of random element in array
  const randomElement = (array => {
    return (array[Math.ceil(Math.random()*array.length-1)]).value
  })

  // logic for random button
  randomBtn.addEventListener('click', () => {
    audio.setAttribute('src', './sounds/'+randomElement(buttons)+'.wav')
    console.log(audio.getAttribute('src'))
    audio.play()

  })

})
