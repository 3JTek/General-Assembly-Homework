document.addEventListener('DOMContentLoaded', () => {
  const option = document.querySelectorAll('.moleholder')
  const scoredisplay = document.querySelector('#score')
  const countDisplay = document.querySelector('#countDisplay')
  const gamePlayagain = document.querySelector('#restartGame')
  const gameStart = document.querySelector('#gameStart')

  const gameStartBord = document.querySelector('.gamestart')
  const gameBoard = document.querySelector('.gameboard')

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
      console.log('well done')
      userscore++
      e.target.removeEventListener('click', userClicked)
    }
    scoredisplay.innerText= `${userscore}`
  }

  function gameRestart(){
    count =59
    userscore=0
    scoredisplay.innerText= `${userscore}`
    init()
  }

  function init(){
    gameStartBord.style.display='none'
    gameStart.style.display='none'
    gamePlayagain.style.display='none'
    gameBoard.style.display='flex'
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
      gameBoard.style.display='none'

    },60000)
  }


  gamePlayagain.style.display='none'
  console.log(gameBoard)
  gameBoard.style.display='none'
  gamePlayagain.addEventListener('click', gameRestart)
  gameStart.addEventListener('click', init)


})
