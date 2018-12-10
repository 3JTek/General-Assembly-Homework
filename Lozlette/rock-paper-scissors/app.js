document.addEventListener('DOMContentLoaded', () => {
  const rock = document.querySelector('.rock')
  const paper = document.querySelector('.paper')
  const scissors = document.querySelector('.scissors')
  const reset = document.querySelector('.reset')
  const player1 = document.querySelector('.Player1')
  const player2 = document.querySelector('.Player2')
  const winnerIs = document.querySelector('.Winner')
  const computer = [1,2,3]

  //set event listener for button click on rock paper or scissors buttons
  rock.addEventListener('click', () => {
    player1.innerHTML = 'PLAYER 1: ROCK'
    const randomResult = computer[Math.floor(Math.random()*computer.length)]
    if (randomResult === 1) {
      player2.innerHTML = 'PLAYER 2: ROCK'
      winnerIs.innerHTML = 'IT\'S A DRAW!'
    } else if (randomResult === 2) {
      player2.innerHTML = 'PLAYER 2: PAPER'
      winnerIs.innerHTML = 'PLAYER 2 WINS!'
    } else {
      player2.innerHTML = 'PLAYER 2: SCISSORS'
      winnerIs.innerHTML = 'PLAYER 1 WINS!'
    }
  })
  paper.addEventListener('click', () => {
    player1.innerHTML = 'PLAYER1: PAPER'
    const randomResult = computer[Math.floor(Math.random()*computer.length)]
    if (randomResult === 1) {
      player2.innerHTML = 'PLAYER 2: ROCK'
      winnerIs.innerHTML = 'PLAYER 1 WINS!'
    } else if (randomResult === 2) {
      player2.innerHTML = 'PLAYER 2: PAPER'
      winnerIs.innerHTML = 'IT\'S A DRAW!'
    } else {
      player2.innerHTML = 'PLAYER 2: SCISSORS'
      winnerIs.innerHTML = 'PLAYER 2 WINS!'
    }
  })
  scissors.addEventListener('click', () => {
    player1.innerHTML = 'PLAYER1: SCISSORS'
    const randomResult = computer[Math.floor(Math.random()*computer.length)]
    if (randomResult === 1) {
      player2.innerHTML = 'PLAYER 2: ROCK'
      winnerIs.innerHTML = 'PLAYER 2 WINS!'
    } else if (randomResult === 2) {
      player2.innerHTML = 'PLAYER 2: PAPER'
      winnerIs.innerHTML = 'PLAYER 1 WINS!'
    } else {
      player2.innerHTML = 'PLAYER 2: SCISSORS'
      winnerIs.innerHTML = 'IT\'S A DRAW!'
    }

  })
  reset.addEventListener('click', () => {
    window.location.reload(false)
  })
})
