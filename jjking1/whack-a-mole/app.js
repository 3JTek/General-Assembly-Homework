document.addEventListener('DOMContentLoaded', () => {
  const option = document.querySelectorAll('.moleholder')
  const scoreDisplay = document.querySelector('#score')
  const countDisplay = document.querySelector('#countDisplay')
  const startBtn = document.querySelector('#start-button')


  let rand =0, userscore=0, count =59

  function getRandom(){
    return Math.floor( Math.random() * option.length)
  }

  function activeMole(){
    rand = getRandom()
    option[rand].classList.add('active')
    setTimeout(() => {
      option[rand].classList.remove('active')
    },750)
  }

  function countdown(){
    countDisplay.textContent = count
    count--
  }

  function userClicked(e){
    if(parseInt(e.target.id) === rand){
      userscore++
      e.target.removeEventListener('click', userClicked)
    }
    scoreDisplay.innerText= userscore
  }

  function resetScoreAndTimer(){
    count = 59
    countDisplay.textContent = 60
    userscore = 0
    scoreDisplay.textContent = 0
  }

  function init(){
    resetScoreAndTimer()
    const timerId = setInterval(() => {
      option.forEach(option => {
        option.addEventListener('click', userClicked)
      })
      activeMole()
      countdown()
    }, 1000)

    setTimeout(() => {
      clearInterval(timerId)
      startBtn.style.display='inline'
    },60000)

  }

  startBtn.addEventListener('click', () => {
    init()
    startBtn.style.display='none'


  })
})
