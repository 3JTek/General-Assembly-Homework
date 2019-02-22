//HHOW I WANTED MY GAME TO WORK
//winner button no live
//user has a go
//when user chooses "paper" the paper button needs to be pressed
//computer has a go
//when computer chooses "rock" the rock button will be pressed
//one winning button will appear
//the right winning button will light up to the right User
//at the end game Reset


document.addEventListener('DOMContentLoaded', () => {
//in the following line i wanted to specify the 3 const choices
const choices= {(a)Paper,(b)Rock,(c)Scissors}

//in the next consti'm giving each user a number included the winner user
  const User = displayResults[0]
  const Computer = displayResults[1]
  const Winner(displayWhoWin) = displayResults[2]

//in the next lines via the Math.random we will see the computer or the user playing
  function play(e){
    const playerUser = choices[Math.floor(Math.random()*3)]
    //MISSING COMPUTER PLAYING! not sure how to make the Computer play the game. Is it with the same syntax of the one above?
    if(User=== Computer){
      displayWhoWin = 'Tie'
    } else if(User.beat === Computer){
      displayWhoWin. = 'User'
    } else{
      displayWhoWin = 'Computer'
    }
  }
