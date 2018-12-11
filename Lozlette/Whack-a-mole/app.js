document.addEventListener('DOMContentLoaded', () => {


  const divs = document.querySelectorAll('.game div')
  const timeRemaining = 60
  let div = divs[0]


  const timerId = setInterval(() => {
    div.classList.remove('mole')
    console.log(timeRemaining)
    div = divs[Math.floor(Math.random() * divs.length)]
    div.classList.add('mole')
    if(timeRemaining === 0) clearInterval(timerId)
  }, 1000)


    .mole.addEventListener('click', () => {
  
    })


})
