document.addEventListener('DOMContentLoaded', () => {


  const rock = document.getElementById('rock')
  const paper = document.getElementById('paper')
  const scissors = document.getElementById('scissors')
  const choices = ['Rock', 'Paper', 'Scissors']
  const winnerDisplay = document.querySelector('.result')
  const resetBtn = document.querySelector('#reset')
  const userScoreDisplay = document.querySelector('#user-score')
  const userChoiceDisplay = document.querySelector('#user-choice-display')
  const cpuScoreDisplay = document.querySelector('#cpu-score')
  const cpuChoiceDisplay = document.querySelector('#cpu-choice-display')
  let userScore = 0, cpuScore =0

  // win conditions
  rock.addEventListener('click', () => {
    // cpu chooses
    const cpuChoice = cpuRandom()
    // updating chosentext on board
    userChoiceDisplay.textContent = 'Rock'
    cpuChoiceDisplay.textContent = cpuChoice
    // calculating winner
    if (cpuChoice === 'Paper') youLose()
    else if (cpuChoice ==='Scissors') youWin()
    else resultIsDraw()

  })

  paper.addEventListener('click', () => {
    const cpuChoice = cpuRandom()
    userChoiceDisplay.textContent = 'Paper'
    cpuChoiceDisplay.textContent = cpuChoice
    if (cpuChoice === 'Scissors') youLose()
    else if (cpuChoice ==='Rock') youWin()
    else resultIsDraw()
  })

  scissors.addEventListener('click', () => {
    const cpuChoice = cpuRandom()
    userChoiceDisplay.textContent = 'Scissors'
    cpuChoiceDisplay.textContent = cpuChoice
    if (cpuChoice === 'Rock') youLose()
    else if (cpuChoice ==='Paper') youWin()
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

  const resultIsDraw = () => winnerDisplay.innerHTML = 'Draw! Try Again.'

  const reset = () => {
    userChoiceDisplay.textContent = ''
    cpuChoiceDisplay.textContent = ''
    userScore = 0,
    cpuScore = 0,
    userScoreDisplay.textContent = userScore
    cpuScoreDisplay.textContent = cpuScore
    winnerDisplay.innerHTML = 'Please choose Rock, Paper, or Scissors'
  }
  const cpuRandom =() => {
    return choices[Math.ceil(Math.random()*choices.length-1)]
  }
  
})
