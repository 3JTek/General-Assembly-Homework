document.addEventListener('DOMContentLoaded', () => {
  const divs = document.querySelectorAll('.game div')
  const timerScreen = document.querySelector('div.screen')
  let timeRemaining = 60
  let div = divs[0]
  const timerId = setInterval(() => {
    div.classList.remove('mole')
    console.log(timeRemaining)
    div = divs[Math.floor(Math.random() * divs.length)]
    div.classList.add('mole')
    if(timeRemaining === 0) clearInterval(timerId)
  }, 1000)

  const timeId = setInterval(() => {
    timeRemaining--
    timerScreen.innerHTML = timeRemaining
    if(timeRemaining === 0) clearInterval(timeId)
  }, 1000)

  console.log(document.querySelector('div.screen'))

})
