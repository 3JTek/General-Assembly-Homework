document.addEventListener('DOMContentLoaded', () => {
  const rock = document.querySelector('.choice .Rock')
  const paper = document.querySelector('.choice .Paper')
  const scissors = document.querySelector('.choice .Scissors')
  const lizard = document.querySelector('.choice .Lizard')
  const spock = document.querySelector('.choice .Spock')
  const player = document.querySelector('.yourChoice')
  const computer = document.querySelector('.computerChoice')
  const theWinner = document.querySelector('.result .winner')
  const tray = [1,2,3,4,5]

  rock.addEventListener('click', () => {
    player.innerHTML = 'Player choose ROCK'
    const randomChoice = computer[Math.floor(Math.random()*tray.length)]
    if (randomChoice === 1) {
      computer.innerHTML = 'Computer choose Rock'
      theWinner.innerHTML = 'It\'s a Tie'
    } else if (randomChoice === 2) {
      computer.innerHTML = 'Computer choose Paper'
      theWinner.innerHTML = 'You Lost'
    } else if (randomChoice === 3) {
      computer.innerHTML = 'Computer choose Scissors'
      theWinner.innerHTML = 'YOU WIN!!!'
    } else if (randomChoice === 4) {
      computer.innerHTML = 'Computer choose Lizard'
      theWinner.innerHTML = 'YOU WIN!!!'
    } else
      computer.innerHTML = 'Computer choose Spock'
    theWinner.innerHTML = 'You Lost!!!'
  }),

  scissors.addEventListener('click', () => {
    player.innerHTML = 'Player choose SCISSORS'
    const randomChoice = computer[Math.floor(Math.random()*computer.length)]
    if (randomChoice === 3) {
      computer.innerHTML = 'Computer choose Scissors'
      theWinner.innerHTML = 'It\'s a Tie'
    } else if (randomChoice === 2) {
      computer.innerHTML = 'Computer choose Paper'
      theWinner.innerHTML = 'You Lost'
    } else if (randomChoice === 3) {
      computer.innerHTML = 'Computer choose Scissors'
      theWinner.innerHTML = 'It\'s a Tie'
    } else if (randomChoice === 4) {
      computer.innerHTML = 'Computer choose Lizard'
      theWinner.innerHTML = 'YOU WIN!!!'
    } else
      computer.innerHTML = 'Computer choose Spock'
    theWinner.innerHTML = 'You Lost!!!'
  }),

  paper.addEventListener('click', () => {
    player.innerHTML = 'Player choose PAPER'
    const randomChoice = computer[Math.floor(Math.random()*computer.length)]
    if (randomChoice === 2) {
      computer.innerHTML = 'Computer choose PAPER'
      theWinner.innerHTML = 'It\'s a Tie'
    } else if (randomChoice === 5) {
      computer.innerHTML = 'Computer choose LIZARD'
      theWinner.innerHTML = 'You Lost'
    } else if (randomChoice === 3) {
      computer.innerHTML = 'Computer choose Scissors'
      theWinner.innerHTML = 'You Lost'
    } else if (randomChoice === 4) {
      computer.innerHTML = 'Computer choose Lizard'
      theWinner.innerHTML = 'YOU WIN!!!'
    } else
      computer.innerHTML = 'Computer choose ROCK'
    theWinner.innerHTML = 'You Lost!!!'
  }),

  lizard.addEventListener('click', () => {
    player.innerHTML = 'Player choose LIZARD'
    const randomChoice = computer[Math.floor(Math.random()*computer.length)]
    if (randomChoice === 1) {
      computer.innerHTML = 'Computer choose Rock'
      theWinner.innerHTML = 'You Lost!!!'
    } else if (randomChoice === 2) {
      computer.innerHTML = 'Computer choose Paper'
      theWinner.innerHTML = 'YOU WIN!!!'
    } else if (randomChoice === 3) {
      computer.innerHTML = 'Computer choose Scissors'
      theWinner.innerHTML = 'You Lost!!!'
    } else if (randomChoice === 4) {
      computer.innerHTML = 'Computer choose Lizard'
      theWinner.innerHTML = 'It\'s a Tie'
    } else
      computer.innerHTML = 'Computer choose Spock'
    theWinner.innerHTML = 'You Lost!!!'
  }),

  spock.addEventListener('click', () => {
    player.innerHTML = 'Player choose SPOCK'
    const randomChoice = computer[Math.floor(Math.random()*computer.length)]
    if (randomChoice === 1) {
      computer.innerHTML = 'Computer choose Rock'
      theWinner.innerHTML = 'YOU WIN!!!'
    } else if (randomChoice === 2) {
      computer.innerHTML = 'Computer choose Paper'
      theWinner.innerHTML = 'YOU WIN!!!'
    } else if (randomChoice === 3) {
      computer.innerHTML = 'Computer choose Scissors'
      theWinner.innerHTML = 'YOU WIN!!!'
    } else if (randomChoice === 4) {
      computer.innerHTML = 'Computer choose Lizard'
      theWinner.innerHTML = 'YOU WIN!!!'
    } else {
      computer.innerHTML = 'Computer choose Spock'
      theWinner.innerHTML = 'It\'s a Tie'
    }
  })
})
