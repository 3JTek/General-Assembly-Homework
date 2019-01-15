document.addEventListener('DOMContentLoaded', () => {
  const player1 = document.querySelector('.player1').querySelector('span')
  const player2 = document.querySelector('.player2').querySelector('span')
  const buttons = document.querySelectorAll('.button.option')
  const resetButton = document.querySelector('.button.reset')
  const notification = document.querySelector('.notification')


  function initialPlayerFields() {
    const initialPlayerText = 'choose an option'
    player1.innerText = initialPlayerText
    player2.innerText = initialPlayerText
  }

  function initialGameStatus() {
    notification.innerText= 'No winner'
  }

  function computerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * (3))]
  }

  function setNotificationToRed() {
    notification.classList.add('is-danger')
  }

  function reset() {
    initialPlayerFields()
    initialGameStatus()
    setNotificationToRed()
  }

  function winner(play1Choice, player2Choice) {
    if(play1Choice === player2Choice) {
      return 'There is a tie'
    } else if((play1Choice === 'rock' && player2Choice !== 'paper') ||
              (play1Choice === 'paper' && player2Choice !== 'scissors') ||
              (play1Choice ==='scissors' && player2Choice !== 'rock')){
      return 'Player 1 wins'
    } else {
      return 'Player 2 wins'
    }
  }

  reset()

  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      player1.innerText = e.target.value
      player2.innerText = computerChoice()
      notification.innerText = winner()
      notification.classList.remove('is-danger')
      notification.classList.add('is-success')
    })
  })

  resetButton.addEventListener('click', reset)
})
