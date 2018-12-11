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

  // const timer = document.querySelector('#timer')


  const timeId = setInterval(() => {
    timeRemaining--
    timerScreen.innerHTML = timeRemaining
    if(timeRemaining === 0) {
      clearInterval(timerId)
    }
  }, 1000)

  console.log(document.querySelector('div.screen'))

})
// const timer = document.querySelector('#timer')
// const timerScreen = document.querySelector('#timer .screen')
//
//
// const timeId = setInterval(() => {
//   timeRemaining--
//   timerScreen.innerHTML = timeRemaining
//
//   function decrementTimer() {
//     const timerId = setInterval(() => {
//       timer--
//       timerScreen.innerHTML = timer
//       if (timer ===0){
//         clearInterval(randomMoleTimer)
//         clearInterval(timerId)
//       }
//     },1000)
//
//     decrementTimer()
//   // }
// })
