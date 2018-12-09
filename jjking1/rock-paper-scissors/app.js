const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const choices = ['rock', 'paper', 'scissors']
const winnerDisplay = document.querySelector('.result')
const resetBtn = document.querySelector('#reset')
const userScoreDisplay = document.querySelector('#user-score')
const cpuScoreDisplay = document.querySelector('#cpu-score')
let userScore = 0, cpuScore =0

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
const youLose = () => {
  winnerDisplay.innerHTML ='You Lose!'
  cpuScore += 1
  cpuScoreDisplay.textContent = cpuScore
}
const youWin = () => {
  winnerDisplay.innerHTML = 'You Win!'
  userScore +=1
  userScoreDisplay.textContent = userScore
}

const resultIsDraw = () => winnerDisplay.innerHTML = 'Draw! Nobody wins. Try Again'

const reset = () => {
  userScore = 0,
  cpuScore = 0,
  userScoreDisplay.textContent = userScore
  cpuScoreDisplay.textContent = cpuScore
  winnerDisplay.innerHTML = 'Please choose Rock, Paper, or Scissors'
}
const cpuRandom =() => {
  return choices[Math.ceil(Math.random()*choices.length-1)]
}
