document.addEventListener('DOMContentLoaded', () => {

const buttonArray = document.querySelectorAll('button')
const computerResultArea = document.getElementById('computer-picked')
const userResultArea = document.getElementById('user-picked')
const outcomeArea = document.getElementById('result')

const logic = function(userChoice,computerChoice) {
    if (userChoice === computerChoice) {
      outcomeArea.innerHTML = 'You Drew...'
    } else if ((userChoice-computerChoice + 3) % 3 === 1) {
      outcomeArea.innerHTML = 'You Win!'
    } else {
      outcomeArea.innerHTML = 'You Lose!'
    }
  }

  buttonArray.forEach(button => {
    button.addEventListener('click', (e) => {
      userResultArea.innerHTML = e.target.className
      let userChoice = parseInt(e.target.value)
      // reset button
      if (userChoice === 3){
        computerResultArea.innerHTML = ''
        userResultArea.innerHTML = ''
        outcomeArea.innerHTML = ''
      } else {
        let randomNumber = Math.random()
        // outcome if computer selects rock
        if (randomNumber < 0.33) {
          computerResultArea.innerHTML = 'Rock'
          let computerChoice = 0
          logic(userChoice,computerChoice)
          // outcome if computer selects scissors
        } else if (randomNumber > 0.66) {
          computerResultArea.innerHTML = 'Scissors'
          let computerChoice = 2
          logic(userChoice,computerChoice)
          // outcome if computer selects paper
        } else {
          computerResultArea.innerHTML = 'Paper'
          let computerChoice = 1
          logic(userChoice,computerChoice)
        }
      }
    })
  })
})
