const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const choices = ['rock', 'paper', 'scissors']
const winnerDisplay = document.querySelector('.result')
const resetBtn = document.querySelector('#reset')


// win conditions
rock.addEventListener('click', () => {
  const cpuChoice = cpuRandom()
  if (cpuChoice === 'paper') youLose()
  else if (cpuChoice ==='scissors') youWin()
  else resultIsDraw()
})

paper.addEventListener('click', () => {
  const cpuChoice = cpuRandom()
  if (cpuChoice === 'scissors') youLose()
  else if (cpuChoice ==='rock') youWin()
  else resultIsDraw()
})

scissors.addEventListener('click', () => {
  const cpuChoice = cpuRandom()
  if (cpuChoice === 'rock') youLose()
  else if (cpuChoice ==='paper') youWin()
  else resultIsDraw()
})

// reset button
resetBtn.addEventListener('click', () => reset())





// result functions
const youLose = () => winnerDisplay.innerHTML ='Cpu Wins'
const youWin = () => winnerDisplay.innerHTML = 'You Win'
const resultIsDraw = () => winnerDisplay.innerHTML = 'Draw! Nobody wins. Try Again'
const reset = () => winnerDisplay.innerHTML = 'Please choose Rock, Paper, or Scissors'
const cpuRandom =() => {
  return choices[Math.ceil(Math.random()*choices.length-1)]
}
