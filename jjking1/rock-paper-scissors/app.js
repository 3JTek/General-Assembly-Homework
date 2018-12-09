const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const choices = ['rock', 'paper', 'scissors']
const winnerDisplay = document.querySelector('.winner-display')
const resetBtn = document.querySelector('#reset')



rock.addEventListener('click', () => {
  const cpuChoice = cpuRandom()
  console.log(cpuChoice)
  if (cpuChoice === 'paper') youLose()
  else if (cpuChoice ==='scissors') youWin()
  else resultIsDraw()
})

paper.addEventListener('click', () => {
  const cpuChoice = cpuRandom()
  console.log(cpuChoice)
  if (cpuChoice === 'scissors') youLose()
  else if (cpuChoice ==='rock') youWin()
  else resultIsDraw()
})

scissors.addEventListener('click', () => {
  const cpuChoice = cpuRandom()
  console.log(cpuChoice)
  if (cpuChoice === 'rock') youLose()
  else if (cpuChoice ==='paper') youWin()
  else resultIsDraw()
})

resetBtn.addEventListener('click', () => reset())






const youLose = () => winnerDisplay.innerHTML ='Cpu Wins'
const youWin = () => winnerDisplay.innerHTML = 'You Win'
const resultIsDraw = () => winnerDisplay.innerHTML = 'Draw! Nobody wins. Try Again'

const reset = () => winnerDisplay.innerHTML = 'Please choose Rock, Paper, or Scissors'




const cpuRandom =() => {
  return choices[Math.ceil(Math.random()*choices.length-1)]
}
