document.addEventListener('DOMContentLoaded', () => {

  const buttons = document.querySelectorAll('.rps')
  const reset = document.getElementById('reset')
  const userSelected = document.getElementById('user-selected')
  const computerSelected = document.getElementById('computer-selected')
  const result = document.getElementById('won')
  const selections = document.querySelector('.row:nth-child(1)')
  const container = document.querySelector('.container')


  const rpsArray = ['Rock', 'Paper', 'Scissors']

  let userInPlay = ''
  let computerInPlay = ''


  const randomSelection = function() {
    return rpsArray[Math.floor(Math.random() * 3)]
  }

  // function for checking who won
  const playGame = function(e) {
    // in plays
    userInPlay = e.target.value
    computerInPlay = randomSelection()

    // Update selected values in html
    userSelected.innerHTML = userInPlay
    computerSelected.innerHTML = computerInPlay

    console.log(selections)

    selections.className = 'first-row-show'
    result.style.fontSize = '50px'

    // game logic test
    if((userInPlay === 'Rock' && computerInPlay === 'Scissors') || (userInPlay === 'Paper' && computerInPlay === 'Rock') || (userInPlay === 'Scissors' && computerInPlay === 'Paper')){
      // user wins
      result.innerHTML = `You won! ${userInPlay} beats ${computerInPlay}`

    } else if((userInPlay === 'Rock' && computerInPlay === 'Rock') || (userInPlay === 'Paper' && computerInPlay === 'Paper') || (userInPlay === 'Scissors' && computerInPlay === 'Scissors')) {
      // draw
      result.innerHTML = `It's a draw! ${userInPlay} draws ${computerInPlay}`


    }else{
      // computer wins
      result.innerHTML = `You lost! ${computerInPlay} beats ${userInPlay}`

    }



  }
  // what did the user selected
  // randomly select rps from array for computer selection
  // carry out if state to understand who won
  // based on result update user selected, computer selected and who won

  // function to reset game

  const resetGame = function() {
    container.style.display ='none'
    result.innerHTML = 'Are you ready to play? Make your selection!'
    userSelected.innerHTML = ''
    computerSelected.innerHTML = ''
    selections.className = 'row'
    result.style.fontSize = '80px'
    setTimeout(function(){
      container.style.display = 'flex'
    }, 1000)


  }

  // Event listener for rock, paper, scissors buttons
  buttons.forEach(button => button.addEventListener('click', playGame))

  // Event listener for reset buttons
  reset.addEventListener('click', resetGame)


















})
