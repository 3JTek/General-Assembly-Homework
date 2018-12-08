window.addEventListener('DOMContentLoaded', () => {

  // grab the buttons
  const buttonArr = document.querySelectorAll('.buttons')
  const playerOne = document.getElementById('player1')
  const playerTwo = document.getElementById('player2')
  const resultValue = document.getElementById('result')
  const outcomes = ['rock', 'paper', 'scissors']
  const punch = document.querySelector('audio')
  const resetButton = document.querySelector('.reset')
  // get the button.value to fill player one form when clicked.


  function compareValues(choice1, choice2) {
    if (choice1 === choice2) {
      return resultValue.value = 'Draw muthafucka'
    }

    if (choice1 === 'rock') {
      if (choice2 === 'scissors') {
        return resultValue.value = 'Player wins'
      } else {
        return resultValue.value = 'Computer wins'
      }
    }
    if (choice1 === 'paper') {
      if (choice2 === 'rock') {
        return resultValue.value = 'Player wins'
      } else {
        if (choice2 === 'scissors') {
          return resultValue.value = 'Computer wins'
        }
      }
    }

    if (choice1 === 'scissors') {
      if (choice2 === 'rock') {
        return resultValue.value = 'Computer wins'
      } else {
        if (choice2 === 'paper') {
          return resultValue.value = 'Player wins'
        }
      }
    }
  }




  //For each button
  buttonArr.forEach(button => {
    //Add click event
    button.addEventListener('click', e => {
      punch.play()
      // player one value is the value of my target button
      playerOne.value = e.target.value
      // player two value is equal to a random string in my outcomes array
      playerTwo.value = outcomes[Math.floor(Math.random() * outcomes.length)]

      // call the funtion
      compareValues(playerOne.value, playerTwo.value)

    })
  })

  resetButton.addEventListener('click', function() {

    playerOne.value = ''
    playerTwo.value = ''
    resultValue.value = ''

  })

})