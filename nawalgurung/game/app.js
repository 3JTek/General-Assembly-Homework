document.addEventListener('DOMContentLoaded', () => {
  //create event listerners for btns
  const btn = document.querySelectorAll('.btn')
  const winScore = document.querySelector('.wins')
  const loseScore = document.querySelector('.loses')
  const computer = document.querySelector('.computer')
  const user = document.querySelector('.user')
  const results = document.querySelector('.results')
  const reset = document.querySelector('.reset')
  let userScore = 0
  let userLoses = 0

  let computerChoice = ''
  //create function to generate Random rock, paper, scissors
  function computerPlay() {
    //create Random num
    const randomNumber = Math.floor(Math.random()*3)
    if(randomNumber === 0){
      computerChoice = 'Rock'
      computer.innerHTML = '<span> Rock </span>'
      console.log(computerChoice)
    } else if(randomNumber === 1){
      computerChoice ='Paper'
      computer.innerHTML = '<span> Paper </span>'
      console.log(computerChoice)
    } else{
      computerChoice = 'Scissors'
      computer.innerHTML = '<span> Scissors </span>'
      console.log(computerChoice)
    }
  }

  //loop & add addEventListener to each btn
  //save the value of the btn on userChoice var
  let userChoice =''
  btn.forEach(btn => {
    btn.addEventListener('click', (e) =>{
      userChoice = e.target.value
      user.innerHTML = userChoice
      console.log('user choice is ' +userChoice)
      //invoke computerPlay func
      computerPlay()
      //invoke compare func
      compare(computerChoice, userChoice)
    })
  })

//func to add score
  function win(){
    userScore++
    winScore.innerHTML = userScore
  }

//func to add loses
  function lose(){
    userLoses++
    loseScore.innerHTML = userLoses
  }


  reset.addEventListener('click', () => {
    userScore = 0
    userLoses = 0
    winScore.innerHTML = userScore
    loseScore.innerHTML = userLoses
  })
  //create function to compare the user Choice with random selected rock paper scissors
  function compare(computerChoice, userChoice){
    if(userChoice === computerChoice){
      results.innerHTML = 'Its a tie!'
    } else if(userChoice === 'Rock'){
      if(computerChoice === 'Paper'){
        results.innerHTML ='Paper wins!'
        lose()
      } else {
        results.innerHTML ='Rock wins!'
        win()
      }
    } else if(userChoice === 'Paper'){
      if(computerChoice === 'Scissors'){
        results.innerHTML = 'Scissors wins!'
        lose()
      } else  {
        results.innerHTML = 'Paper wins!'
        win()
      }
    } else if(userChoice === 'Scissors'){
      if(computerChoice === 'Rock'){
        results.innerHTML = 'Rock wins!'
        lose()
      } else {
        results.innerHTML = 'Scissors Wins!'
        win()
      }
    }
  }
})



//call function compare
