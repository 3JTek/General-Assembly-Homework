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
    return choices[Math.floor(Math.random() * (3 - 1) + 1)]
  }


  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      player1.innerText = e.target.value
      player2.innerText = computerChoice()
      
    })
  })
})
