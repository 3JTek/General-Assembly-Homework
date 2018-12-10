document.addEventListener('DOMContentLoaded', () => {
  // Variables
  const buttons = document.querySelectorAll('button')
  const halvariables = [0,1,2]
  let playersoption = ''
  let halChoice = ''

  // step 1
  // player presses buttion and returns a value A.
  const playerchoice = (bollocks) => {
    playersoption = parseInt(bollocks.target.value)
    // step 2
    // players option gets displayed
    document.getElementById('player1').innerHTML = bollocks.target.name
    gethalchoice(bollocks)
  }
  buttons.forEach(button => button.addEventListener('click', playerchoice))

  // step 3
  // HAL picks number from random 0-2.
  function gethalchoice() {
    halChoice = halvariables[Math.floor(Math.random() * halvariables.length)]
    // document.getElementById('halchoice1').innerHTML = shit.target.name
    if (halChoice === 0) {
      document.getElementById('halchoice1').innerHTML = 'Rock'
    } else if (halChoice === 1) {
      document.getElementById('halchoice1').innerHTML = 'Paper'
    } else {
      document.getElementById('halchoice1').innerHTML = 'Scissors'
    }
    wincheck()
  }

  // step 4
  // Hals option gets displayed



  // step 5
  // Result is returned to Span in Div after the if else loop.
  // playerchoice = a
  // halChoice = b
  function wincheck(){
    if (playersoption === halChoice) {
      return document.getElementById('results1').innerHTML = 'It\'s a draw'
    } else if ((playersoption - halChoice + 3) % 3 === 1) {
      return document.getElementById('results1').innerHTML = 'You Win'
    } else {
      return document.getElementById('results1').innerHTML = 'Hal wins'
    }
  }
  // restart()document.getElementById('restart')=location.reload()
})
