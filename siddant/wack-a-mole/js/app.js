document.addEventListener('DOMContentLoaded', () => {
  const option = document.querySelectorAll('.moleholder')
  const scoredisplay = document.querySelector('#score')
  const countDisplay = document.querySelector('#countDisplay')
  const gamePlayagain = document.querySelector('#restartGame')

  let rand =0, userscore=0, count =59

  function getRandom(){
    return Math.floor( Math.random() * option.length)
  }

  function activeMole(){
    rand = getRandom()
    option[rand].classList.add('active')
    setTimeout(() => {
      option[rand].classList.remove('active')
    },850)
  }

  function countdown(){
    countDisplay.textContent = count
    count--
  }

  function userClicked(e){
    if(parseInt(e.target.id) === rand){
      console.log('well done')
      userscore++
      e.target.removeEventListener('click', userClicked)
    }
    scoredisplay.innerText= `You Scored: ${userscore}`
    console.log(`score ${userscore}`)
  }

  function gameRestart(){
    count =59
    userscore=0
    init()
  }

  function init(){

    const timerId = setInterval(() => {
      option.forEach(option => {
        option.addEventListener('click', userClicked)
      })
      activeMole()
      countdown()
    }, 1000)

    setTimeout(() => {
      clearInterval(timerId)
      gamePlayagain.style.display=''
    },60000)
  }


  gamePlayagain.style.display='none'
  gamePlayagain.addEventListener('click', gameRestart)
  init()
})
