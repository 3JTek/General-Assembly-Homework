document.addEventListener('DOMContentLoaded', () => {
  const option = document.querySelectorAll('.moleholder')
  const scoredisplay = document.querySelectorAll('.score')
  const countDisplay = document.querySelector('#countDisplay')
  const gamePlayagain = document.querySelector('#restartGame')
  const gameStart = document.querySelector('#gameStart')
  const gameOver = document.querySelector('.gameOver')
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
    scoredisplay[0].innerText= `${userscore}`
  }

  function gameRestart(){
    gameOver.style.display='none'
    count =59
    userscore=0
    scoredisplay[0].innerText= `${userscore}`
    init()
  }

  function init(){
    gameStartBord.style.display='none'
    gameStart.style.display='none'
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
      gameBoard.style.display='none'
      gameOver.style.display=''
      console.log(userscore)
      scoredisplay[1].innerText= ` ${userscore}`

      //scoredisplay.innerText= `${userscore}`

    },60000)
    //60000
  }


  gameOver.style.display='none'
  gameBoard.style.display='none'
  gamePlayagain.addEventListener('click', gameRestart)
  gameStart.addEventListener('click', init)


})
