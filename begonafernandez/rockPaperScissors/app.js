document.addEventListener('DOMContentLoaded', () => {
  const player1 = document.querySelector('.player1').querySelector('span')
  const player2 = document.querySelector('.player2').querySelector('span')
  const buttons = document.querySelectorAll('.button.option')
  const notification = document.querySelector('.notification')




  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      player1.innerText = e.target.value

    })
  })
})
