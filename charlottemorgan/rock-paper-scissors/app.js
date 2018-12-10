document.addEventListener('DOMContentLoaded', () => {
  console.log('JS loaded')
  // find the buttons from the html
  const buttons = document.querySelectorAll('.main-buttons')
  console.log('buttons')
  //find the form for the computer input from the html
  const playerOne = document.getElementById('Player-1')
  console.log('playerOne')
  //find the form for the user input from the html
  const playerTwo = document.getElementById('Player-2')
  console.log('playerTwo')
  //find the result input from the html
  const resultValue = document.getElementById('result')
  //find the reset button in the html
  const resetButton = document.querySelector('.reset-button')
  console.log('resetButton')


  // // add event listener for reset button
  // resetButton.addEventListener('click', reset)
  //when button is clicked run function to clear values in the forms
  function reset() {
    // make the value of playerOne empty
    playerOne.value = ''
    // make the value of playerTwo empty
    playerTwo.value = ''
    // make the result empty
    resultValue.value = ''

  }

  resetButton.addEventListener('click', reset)


  //array with possible options
  const options = ['Rock', 'Paper', 'Scissors']

  // get the button.value to fill player one form when clicked.
  function compareValues(option1, option2) {
    if (option1 === option2) {
      return resultValue.value = 'You have tied!'
    }

    if (option1 === 'Rock') {
      if (option2 === 'Scissors') {
        return resultValue.value = 'Player wins yay!!!!'
      } else {
        return resultValue.value = 'Computer wins boooo!!!!'
      }
    }
    if (option1 === 'Paper') {
      if (option2 === 'Rock') {
        return resultValue.value = 'Player wins yay!!!!'
      } else {
        if (option2 === 'Scissors') {
          return resultValue.value = 'Computer wins boooo!!!!'
        }
      }
    }

    if (option1 === 'Scissors') {
      if (option2 === 'Rock') {
        return resultValue.value = 'Computer wins boooo!!!!'
      } else {
        if (option2 === 'Paper') {
          return resultValue.value = 'Player wins yay!!!!'
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
      playerTwo.value = options[Math.floor(Math.random() * options.length)]
      // call the funtion
      compareValues(playerOne.value, playerTwo.value)
    })
  })
})
