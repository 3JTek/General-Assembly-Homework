document.addEventListener('DOMContentLoaded', () => {
  const player1 = document.querySelector('.player1').querySelector('span')
  const player2 = document.querySelector('.player2').querySelector('span')
  const buttons = document.querySelectorAll('.button.option')
  const notification = document.querySelector('.notification')


  const initialPlayerText = 'choose an option'
  player1.innerText = initialPlayerText
  player2.innerText = initialPlayerText

  function computerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * (3))]
  }

  function winner(play1Choice, player2Choice) {
    if(play1Choice === player2Choice) {
      notification.innerText = 'There is a tie'
    } else if((play1Choice === 'rock' && player2Choice !== 'paper') ||
              (play1Choice === 'paper' && player2Choice !== 'scissors') ||
              (play1Choice ==='scissors' && player2Choice !== 'rock')){
      notification.innerText =  'Player 1 wins'
    } else {
      notification.innerText = 'Player 2 wins'
    }
  }

  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      player1.innerText = e.target.value
      player2.innerText = computerChoice()
      console.log(winner(player1.innerText, player2.innerText))
    })
  })
})
