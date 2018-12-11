document.addEventListener('DOMContentLoaded',() => init())

function init () {

  //Get array of the buttons
  const moleArray = document.querySelectorAll('div.mole')
  let randomMole
  let score = 0
  let timer = 60
  let randomMoleTimer

  const scoreBox = document.querySelector('#score')
  const timerScreen = document.querySelector('#timer')


  function loop(){
    if(randomMole !== undefined)randomMole.classList.remove('show')

    const randomNumber = Math.floor(Math.random()*9)
    const randomTime = Math.floor(Math.random()*1000)+500
    randomMole = moleArray[randomNumber]
    randomMole.classList.add('show')
    randomMoleTimer =  setTimeout(loop,randomTime)
  }


  loop()

  //when the user clicks a mole initiate some functions
  moleArray.forEach(mole => {
    mole.addEventListener('click', e => {
      score +=1
      scoreBox.innerHTML = score
      e.currentTarget.classList.remove('show')
    })
  })

  function decrementTimer() {
    const timerId = setInterval(() => {
      timer--
      timerScreen.innerHTML = timer
      if (timer ===0){
        clearInterval(randomMoleTimer)
        clearInterval(timerId)
      }
    },1000)
  }

  decrementTimer()



}
