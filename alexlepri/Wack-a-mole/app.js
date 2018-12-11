document.addEventListener('DOMContentLoaded', () => {

  const divs = document.querySelectorAll('.game div')
  let timeRemaining = 30
  let div = divs[0]

  const timerId = setInterval(() => {
    div.classList.remove('mole')
    timeRemaining--
    console.log(timeRemaining)

    div = divs[Math.floor(Math.random() * divs.length)]
    div.classList.add('mole')
    if(timeRemaining === 0) clearInterval(timerId)
  }, 1000)

})
