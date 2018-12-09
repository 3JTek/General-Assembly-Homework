document.addEventListener('DOMContentLoaded', () => {

  //create event listerners for btns
  const userRock = document.querySelector('#rock')
  const userPaper = document.querySelector('#paper')
  const userScissors = document.querySelector('#scissors')
  const computerBtn = document.querySelector('#computerBtn')

  //create function to generate Random rock, paper, scissors
computerBtn.addEventListener('click', () => {
    let computerChoice = Math.floor(Math.random()*3)
    if(computerChoice === 0){
      computerChoice = 'rock'
    } if(computerChoice === 1){
      computerChoice = 'paper'
    } else{
      computerChoice = 'scissors'
    }
  })

  //create function to compare the user Choice with random selected rock paper scissors
function compare(computerChoice, userChoice){

}

})
