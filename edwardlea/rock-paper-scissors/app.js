document.addEventListener('DOMContentLoaded', () => {

  const buttons = document.querySelectorAll('.rps')
  const reset = document.getElementById('reset')
  const userSelected = document.getElementById('user-selected')
  const computerSelected = document.getElementById('computer-selected')
  const result = document.getElementById('result')
  const selections = document.querySelector('.row:nth-child(1)')
  const container = document.querySelector('.container')

  // Options array
  const rpsArray = ['Rock', 'Paper', 'Scissors', 'Spock', 'Lizard']

  // User wins combination array
  const userWins = ['RockScissors','PaperRock','ScissorsPaper', 'LizardSpock', 'SpockRock', 'LizardPaper', 'RockLizard', 'SpockScissors', 'PaperSpock', 'ScissorsLizard']

  //In play variables
  let userInPlay = ''
  let computerInPlay = ''

  // Computer selection function
  const randomSelection = function() {
    return rpsArray[Math.floor(Math.random() * 5)]
  }

  // Function for checking who won
  const playGame = function(e) {
    // user and computer choices
    userInPlay = e.target.value
    computerInPlay = randomSelection()
    // Update selected values in html
    userSelected.innerHTML = userInPlay
    computerSelected.innerHTML = computerInPlay
    // Stlying of page to show results
    selections.className = 'first-row-show'
    // Game logic
    if(userInPlay === computerInPlay){
      // Draw result
      result.innerHTML = `It's a draw! ${userInPlay} draws ${computerInPlay}`
    } else if(userWins.includes(userInPlay+computerInPlay)){
      // User wins result
      result.innerHTML = `You won! ${userInPlay} beats ${computerInPlay}`
    }else{
      // Computer wins result
      result.innerHTML = `You lost! ${computerInPlay} beats ${userInPlay}`
    }
    result.style.display = 'none'
    setTimeout(function(){
      result.style.display = 'flex'
      result.style.fontSize = '60px'
    }, 1500)
  }

  // Function to reset game
  const resetGame = function() {
    container.style.display ='none'
    result.innerHTML = 'Are you ready to play? Make your selection!'
    result.style.fontSize = '80px'
    userSelected.innerHTML = ''
    computerSelected.innerHTML = ''
    selections.className = 'row'
    setTimeout(function(){
      container.style.display = 'flex'
    }, 1000)
  }

  // Event listener for rock, paper, scissors buttons
  buttons.forEach(button => button.addEventListener('click', playGame))

  // Event listener for reset buttons
  reset.addEventListener('click', resetGame)

})
