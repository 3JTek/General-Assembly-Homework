// document.addEventListener('DOMContentLoaded', () => {
//
//
//   const divs = document.querySelectorAll('.game div')
//   const timeRemaining = 60
//   let div = divs[0]
//   const image = document.querySelector('.mole')
//
//
//   const timerId = setInterval(() => {
//     div.classList.remove('mole')
//     console.log(timeRemaining)
//     div = divs[Math.floor(Math.random() * divs.length)]
//     div.classList.add('mole')
//     if(timeRemaining === 0) clearInterval(timerId)
//   }, 1000)
//
//   let count = 0
//   function setscore() {
//     count += 1
//     console.log(count)
//   }
//
//   image.addEventListener('click', setscore())
//
//
// })

document.addEventListener('DOMContentLoaded', () => {

  const divs = document.querySelectorAll('.game div')
  let timeRemaining = 60
  let div = divs[0]


  const timerId = setInterval(() => {
    console.log(timeRemaining)
    timeRemaining--

    // REMOVING CLASS AND EVENTLISTENER FROM THE EXISTING "div"
    div.classList.remove('mole')
    div.removeEventListener('click', setscore)

    // FIND NEW "div", ADDING CLASS AND ADDEVENTLISTENER
    div = divs[Math.floor(Math.random() * divs.length)]
    div.classList.add('mole')
    div.addEventListener('click', setscore)

    if(timeRemaining === 0) clearInterval(timerId)

  }, 1000)

  let count = 0
  function setscore() {
    count += 1
    console.log('score ----> ' + count)
  }

})
