document.addEventListener('DOMContentLoaded', () => {

  //create event listerners for btns
  const userRock = document.querySelector('#rock')
  const userPaper = document.querySelector('#paper')
  const userScissors = document.querySelector('#scissors')
  const computerBtn = document.querySelector('#computerBtn')
  const btn = document.querySelectorAll('.btn')


  let computerChoice = ''
  //create function to generate Random rock, paper, scissors
  computerBtn.addEventListener('click', () => {
    //create Random num
    const randomNumber = Math.floor(Math.random()*3)
    if(randomNumber === 0){
      computerChoice = 'Rock'
      console.log(computerChoice)
    } else if(randomNumber === 1){
      computerChoice ='Paper'
      console.log(computerChoice)
    } else{
      computerChoice = 'Scissors'
      console.log(computerChoice)
    }
  })

  //loop & add addEventListener to each btn
  //save the value of the btn on userChoice var
  let userChoice =''
  btn.forEach(btn => {
    btn.addEventListener('click', (e) =>{
      userChoice = e.target.value
      console.log(userChoice)
      console.log(compare(computerChoice, userChoice))
    })
  })


  //create function to compare the user Choice with random selected rock paper scissors
  function compare(computerChoice, userChoice){
    if(computerChoice === userChoice){
      return 'its a tie'
    }
    if(computerChoice === 'Rock'){
      if(userChoice === 'Paper'){
        return 'Paper wins!'
      } else {
        return 'Rock wins!'
      }
    }
    if(computerChoice === 'Paper'){
      if(userChoice === 'Scissors'){
        return 'Scissors wins!'
      } else {
        return 'Paper wins!'
      }
    }
    if(computerChoice === 'Scissors'){
      if(userChoice === 'Rock'){
        return 'Rock wins!'
      } else {
        return 'Scissors Wins!'
      }
    }
  }
})

//call function compare
