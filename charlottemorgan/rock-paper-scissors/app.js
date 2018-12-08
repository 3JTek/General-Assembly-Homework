document.addEventListener('DOMContentLoaded', () => {
  console.log('JS loaded')
  // find the buttons from the html
  const buttons = document.querySelectorAll('button')
  console.log('buttons')
  //find the form for the computer input from the html
  const playerOne = document.getElementById('Player-1')
  console.log('playerOne')
  //find the form for the user input from the html
  const playerTwo = document.getElementById('Player-2')
  console.log('playerTwo')
  const resultValue = document.getElementById('result')
  //array with possible outcomes
  const outcomes = ['rock', 'paper', 'scissors']

  // get the button.value to fill player one form when clicked.

  function compareValues(choice1, choice2) {
    if (choice1 === choice2) {
      return resultValue.value = 'The result is a tie!'
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

  buttons.forEach(button => {
    //Add click event to each button
    button.addEventListener('click', e => {
      console.log(e.target.value)
      // make the value of playerOne equal to the value of the button
      playerOne.value = e.target.value
      // make the value of playerTwo equal to a random string in the outcomes array
      playerTwo.value = outcomes[Math.floor(Math.random() * outcomes.length)]
      // call the funtion
      compareValues(playerOne.value, playerTwo.value)
    })
  })
})
